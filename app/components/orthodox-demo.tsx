import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Skeleton } from "~/components/ui/skeleton";

export function OrthodoxDemo() {
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});

  const handleImageLoad = (imageKey: string) => {
    setImagesLoaded((prev) => ({ ...prev, [imageKey]: true }));
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #112722 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Social Media Section - At the top */}
      <section className="relative z-10 py-4 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-center gap-6">
            <span className="text-[#112722] text-sm font-medium font-['Crimson_Pro']">
              Follow us:
            </span>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/orthodoxYouthLagos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#112722] text-white rounded-full flex items-center justify-center hover:bg-[#d3e97c] hover:text-[#112722] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/orthodox_youth_lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#112722] text-white rounded-full flex items-center justify-center hover:bg-[#d3e97c] hover:text-[#112722] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.988-5.367 11.988-11.988C24.005 5.367 18.638.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.138 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z" />
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@OrthodoxYouthLagos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#112722] text-white rounded-full flex items-center justify-center hover:bg-[#d3e97c] hover:text-[#112722] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@orthodoxYouthLagos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#112722] text-white rounded-full flex items-center justify-center hover:bg-[#d3e97c] hover:text-[#112722] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative z-10 py-32 overflow-hidden text-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/background.jpg"
            alt="Orthodox Background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
        </div>

        {/* Orthodox Archdiocese Logo */}
        <div className="absolute top-8 left-8">
          <img
            src="https://orthodoxng.com/wp-content/uploads/2025/05/OANG_Logo_White_on_Transparent_Final-1024x1024.webp"
            alt="Orthodox Archdiocese of Nigeria"
            className="object-contain w-20 h-20"
          />
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white font-['Besley_Narrow'] animate-fade-in drop-shadow-lg leading-tight">
            Orthodox Youth
            <span className="text-[#d3e97c]">Lagos</span>
          </h1>
          <p className="text-xl mb-12 text-white/90 font-['Crimson_Pro'] max-w-3xl mx-auto leading-relaxed animate-slide-up drop-shadow-md">
            Connecting young hearts with{" "}
            <span className="text-[#d3e97c] font-semibold">ancient faith</span>{" "}
            in the vibrant city of Lagos, Nigeria
          </p>
          <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#d3e97c] text-[#112722] hover:bg-white hover:text-[#112722] font-['Crimson_Pro'] font-semibold px-8 py-3 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Join Our Community
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-[#112722] font-['Crimson_Pro'] font-semibold px-8 py-3 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              Upcoming Events
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 px-4 py-20 bg-gray-50">
        <div className="container mx-auto">
          {/* About Section with Visual */}
          <section className="mb-20">
            <div className="items-center grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <div className="w-16 h-px bg-[#d3e97c] mb-6"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#112722] mb-6 font-['Besley_Narrow'] leading-tight">
                  Faith • Community • Growth
                </h2>
                <p className="text-lg text-gray-700 font-['Crimson_Pro'] leading-relaxed mb-8">
                  We are a vibrant community of young Orthodox believers in
                  Lagos, Nigeria, committed to growing in faith and serving our
                  community together through worship, fellowship, and service.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#d3e97c] rounded-full"></div>
                    <span className="text-gray-700 font-['Crimson_Pro']">
                      Weekly Bible studies and prayer meetings
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#7dd6e8] rounded-full"></div>
                    <span className="text-gray-700 font-['Crimson_Pro']">
                      Regular community service projects
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#112722] rounded-full"></div>
                    <span className="text-gray-700 font-['Crimson_Pro']">
                      Spiritual retreats and fellowship events
                    </span>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="flex justify-end order-1 lg:order-2">
                <div className="relative">
                  <img
                    src="https://static.wixstatic.com/media/e6b880_ca1e297343f942488520dc11035534b1~mv2.jpg/v1/fill/w_656,h_656,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e6b880_ca1e297343f942488520dc11035534b1~mv2.jpg"
                    alt="Christ Pantocrator Icon"
                    className="object-cover w-96 h-96 rounded-2xl"
                  />
                  {/* Floating accent */}
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#d3e97c]/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#7dd6e8]/10 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery */}
          <section className="mb-20">
            <div className="mb-16 text-center">
              <div className="w-16 h-px bg-[#d3e97c] mx-auto mb-8"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#112722] mb-6 font-['Besley_Narrow']">
                Community Gallery
              </h2>
              <p className="text-lg text-gray-600 font-['Crimson_Pro']">
                Moments from our journey of faith and fellowship
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Community Service", desc: "Serving together" },
                { title: "Youth Retreat", desc: "Spiritual growth" },
                { title: "Divine Liturgy", desc: "Sacred worship" },
              ].map((item, i) => (
                <div key={i} className="group">
                  <Card className="overflow-hidden border border-gray-200 bg-white hover:border-[#d3e97c] transition-all duration-500 hover:shadow-2xl hover:shadow-[#d3e97c]/20 p-0 group hover:-translate-y-2">
                    <div className="relative m-0 overflow-hidden bg-gray-100 aspect-video">
                      {!imagesLoaded[`gallery-${i}`] && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-6 h-6 bg-gray-400 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      )}
                      <img
                        src={
                          [
                            "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop", // Community service hands
                            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop", // Youth retreat mountain
                            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop", // Orthodox church interior
                          ][i]
                        }
                        alt={item.title}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${
                          imagesLoaded[`gallery-${i}`]
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                        onLoad={() => handleImageLoad(`gallery-${i}`)}
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/60 to-transparent">
                        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="w-16 h-16 bg-white/95 text-[#112722] rounded-full flex items-center justify-center mx-auto mb-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                            <svg
                              className="w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-white font-semibold font-['Besley_Narrow'] text-lg">
                            View Gallery
                          </span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-[#112722] mb-2 font-['Besley_Narrow'] text-lg group-hover:text-[#d3e97c] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 font-['Crimson_Pro'] leading-relaxed">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* Youth Executive Section */}
          <section className="relative py-16 mb-20 overflow-hidden bg-white rounded-lg">
            <div className="relative z-10 mb-16 text-center">
              <div className="w-16 h-px bg-[#112722] mx-auto mb-8"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#112722] mb-6 font-['Besley_Narrow']">
                Youth Executive
              </h2>
              <p className="text-lg text-gray-600 font-['Crimson_Pro']">
                Meet the dedicated leaders guiding our community
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: "Chioma Okafor", role: "President", initials: "CO" },
                {
                  name: "David Emenike",
                  role: "Vice President",
                  initials: "DE",
                },
                { name: "Grace Adebayo", role: "Secretary", initials: "GA" },
                { name: "Michael Okwu", role: "Treasurer", initials: "MO" },
                {
                  name: "Blessing Nwachukwu",
                  role: "Outreach Director",
                  initials: "BN",
                },
                {
                  name: "Emmanuel Obi",
                  role: "Programs Director",
                  initials: "EO",
                },
              ].map((leader, i) => (
                <div key={i} className="text-center group">
                  <div className="relative inline-block mb-4">
                    <Avatar className="w-20 h-20 mx-auto border-2 border-gray-200 group-hover:border-[#d3e97c] transition-all duration-300">
                      <div className="w-full h-full bg-[#112722] text-white flex items-center justify-center group-hover:bg-[#d3e97c] group-hover:text-[#112722] transition-all duration-300">
                        <span className="text-lg font-bold font-['Besley_Narrow']">
                          {leader.initials}
                        </span>
                      </div>
                    </Avatar>
                  </div>
                  <h3 className="font-semibold text-[#112722] mb-1 font-['Besley_Narrow']">
                    {leader.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-['Crimson_Pro']">
                    {leader.role}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Events Preview */}
          <section className="relative mb-20">
            {/* Orthodox Dove (Holy Spirit) Symbol */}
            <div className="absolute top-0 right-20 opacity-8">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                className="text-[#d3e97c]"
              >
                {/* Holy Spirit Dove with Orthodox styling */}
                <path
                  d="M50 15 Q60 25 70 35 Q65 40 60 35 Q55 40 50 45 Q45 40 40 35 Q35 40 30 35 Q40 25 50 15 Z"
                  fill="currentColor"
                  opacity="0.7"
                />
                <path
                  d="M50 45 Q55 55 60 65 Q50 60 50 45"
                  fill="currentColor"
                  opacity="0.8"
                />
                {/* Rays of light */}
                <g stroke="currentColor" strokeWidth="1" opacity="0.5">
                  <path d="M50 20 L50 10 M45 25 L40 20 M55 25 L60 20 M50 40 L50 50" />
                </g>
              </svg>
            </div>

            <div className="mb-16 text-center">
              <div className="w-16 h-px bg-[#112722] mx-auto mb-8"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#112722] mb-6 font-['Besley_Narrow']">
                Upcoming Events
              </h2>
              <p className="text-lg text-gray-600 font-['Crimson_Pro']">
                Join us for these community activities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-gray-200 bg-white hover:border-[#d3e97c] transition-all duration-500 hover:shadow-2xl hover:shadow-[#d3e97c]/20 group hover:-translate-y-1 relative overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d3e97c] to-[#7dd6e8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-[#d3e97c]/10 rounded-full flex items-center justify-center group-hover:bg-[#d3e97c] transition-all duration-300">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          📖
                        </span>
                      </div>
                      <div>
                        <CardTitle className="text-[#112722] font-['Besley_Narrow'] text-xl group-hover:text-[#d3e97c] transition-colors duration-300">
                          Youth Bible Study
                        </CardTitle>
                        <CardDescription className="text-gray-600 font-['Crimson_Pro'] mt-1">
                          Weekly gathering for spiritual growth
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-[#d3e97c]/20 text-[#112722] font-['Crimson_Pro'] font-semibold border border-[#d3e97c]/30">
                      Weekly
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-700 mb-6 font-['Crimson_Pro']">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#d3e97c]/20 transition-colors duration-300">
                        <span className="text-sm">📅</span>
                      </div>
                      <span>Every Saturday, 4:00 PM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#d3e97c]/20 transition-colors duration-300">
                        <span className="text-sm">📍</span>
                      </div>
                      <span>St. Nicholas Orthodox Church</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#d3e97c]/20 transition-colors duration-300">
                        <span className="text-sm">👥</span>
                      </div>
                      <span>15 spots available</span>
                    </div>
                  </div>
                  <Button className="w-full bg-[#112722] text-white hover:bg-[#d3e97c] hover:text-[#112722] font-['Crimson_Pro'] font-semibold transition-all duration-300 py-3 rounded-xl hover:shadow-lg transform hover:scale-[1.02]">
                    Register Now ✨
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white hover:border-[#7dd6e8] transition-all duration-500 hover:shadow-2xl hover:shadow-[#7dd6e8]/20 group hover:-translate-y-1 relative overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7dd6e8] to-[#d3e97c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-[#7dd6e8]/10 rounded-full flex items-center justify-center group-hover:bg-[#7dd6e8] transition-all duration-300">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          🤝
                        </span>
                      </div>
                      <div>
                        <CardTitle className="text-[#112722] font-['Besley_Narrow'] text-xl group-hover:text-[#7dd6e8] transition-colors duration-300">
                          Community Service
                        </CardTitle>
                        <CardDescription className="text-gray-600 font-['Crimson_Pro'] mt-1">
                          Outreach to local community
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-[#7dd6e8]/20 text-[#112722] font-['Crimson_Pro'] font-semibold border border-[#7dd6e8]/30">
                      Monthly
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-700 mb-6 font-['Crimson_Pro']">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#7dd6e8]/20 transition-colors duration-300">
                        <span className="text-sm">📅</span>
                      </div>
                      <span>First Sunday, 2:00 PM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#7dd6e8]/20 transition-colors duration-300">
                        <span className="text-sm">📍</span>
                      </div>
                      <span>Various Locations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#7dd6e8]/20 transition-colors duration-300">
                        <span className="text-sm">👥</span>
                      </div>
                      <span>20 volunteers needed</span>
                    </div>
                  </div>
                  <Button className="w-full bg-[#112722] text-white hover:bg-[#7dd6e8] hover:text-[#112722] font-['Crimson_Pro'] font-semibold transition-all duration-300 py-3 rounded-xl hover:shadow-lg transform hover:scale-[1.02]">
                    Join Mission 🙏
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
