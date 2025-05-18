import { 
  users, 
  type User, 
  type InsertUser, 
  contactFormSubmissions,
  type ContactFormSubmission,
  type InsertContactForm
} from "@shared/schema";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form methods
  submitContactForm(data: InsertContactForm): Promise<ContactFormSubmission>;
  getContactFormSubmissions(): Promise<ContactFormSubmission[]>;
}

// PostgreSQL storage implementation
export class PostgresStorage implements IStorage {
  private db: ReturnType<typeof drizzle>;

  constructor() {
    // Create database connection
    const connectionString = process.env.DATABASE_URL || "";
    const client = postgres(connectionString);
    this.db = drizzle(client);
  }

  async getUser(id: number): Promise<User | undefined> {
    const result = await this.db.select().from(users).where((users) => users.id.equals(id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where((users) => users.username.equals(username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db.insert(users).values(insertUser).returning();
    return result[0];
  }

  // Contact form methods
  async submitContactForm(data: InsertContactForm): Promise<ContactFormSubmission> {
    const result = await this.db.insert(contactFormSubmissions).values(data).returning();
    return result[0];
  }

  async getContactFormSubmissions(): Promise<ContactFormSubmission[]> {
    return await this.db.select().from(contactFormSubmissions).orderBy(
      (contactFormSubmissions) => contactFormSubmissions.createdAt,
      "desc"
    );
  }
}

// Memory storage for fallback or testing
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactFormSubmission>;
  private userId: number;
  private contactId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.userId = 1;
    this.contactId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async submitContactForm(data: InsertContactForm): Promise<ContactFormSubmission> {
    const id = this.contactId++;
    const submission: ContactFormSubmission = { 
      ...data, 
      id, 
      createdAt: new Date() 
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactFormSubmissions(): Promise<ContactFormSubmission[]> {
    return Array.from(this.contactSubmissions.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
}

// Use PostgreSQL storage if DATABASE_URL is available, otherwise fallback to memory storage
export const storage = process.env.DATABASE_URL 
  ? new PostgresStorage() 
  : new MemStorage();
