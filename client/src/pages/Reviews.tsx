import { Helmet } from "react-helmet";
import TestimonialsGrid from "@/components/reviews/TestimonialsGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Reviews() {
  return (
    <>
      <Helmet>
        <title>Customer Reviews - Reliable Truck Repair</title>
        <meta name="description" content="Read what our customers say about our truck repair services. High quality work, fair prices, and exceptional service." />
      </Helmet>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Customer Reviews</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            See what our customers have to say about our truck repair services.
          </p>
          
          {/* Testimonials */}
          <div className="mb-12">
            <TestimonialsGrid />
          </div>
          
          {/* Leave a Review CTA */}
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6 text-center">
              <h3 className="text-xl font-bold mb-4">Had a great experience with us?</h3>
              <p className="text-gray-600 mb-6">
                We'd love to hear your feedback! Leave a review to help other truck drivers and fleet managers find reliable repair services.
              </p>
              <Button className="bg-secondary hover:bg-secondary/90 text-black font-bold">
                Leave a Review
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
