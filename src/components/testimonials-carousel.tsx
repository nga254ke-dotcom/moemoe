
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function TestimonialsCarousel() {
  const testimonials = [
    { name: 'Michael R.', company: 'Atlanta Law Firm', text: 'MoeMoe\'s courier service is a lifesaver. Always on time and professional. I can\'t recommend them enough for legal document delivery in downtown Atlanta.' },
    { name: 'Sarah J.', company: 'Tucker Small Business', text: 'The team did an amazing job with our office deep clean. It feels like a brand new space! The attention to detail was incredible.' },
    { name: 'David C.', company: 'Marietta Homeowner', text: 'I needed a package sent urgently across town and they handled it perfectly. The process was smooth and the communication was excellent.' },
    { name: 'Emily T.', company: 'Roswell Event Planner', text: 'Reliable, affordable, and always friendly. MoeMoe Enterprises is my go-to for all my event courier needs. They never disappoint!' },
    { name: 'Chris B.', company: 'Decatur Property Manager', text: 'The move-out cleaning service was exceptional. The apartment was spotless, which made the tenant transition seamless. Highly recommend.' }
  ];

  return (
    <Carousel
      plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {testimonials.map((testimonial, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 h-full">
              <Card className="flex flex-col h-full bg-background shadow-lg">
                <CardContent className="pt-6 flex-1 flex flex-col">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  </div>
                  <p className="italic text-muted-foreground">"{testimonial.text}"</p>
                </CardContent>
                <CardHeader className="flex-row items-center gap-4 pt-4">
                  <Avatar>
                    <AvatarImage src={`https://picsum.photos/id/${100 + i}/40`} width={40} height={40} data-ai-hint="person portrait" alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
