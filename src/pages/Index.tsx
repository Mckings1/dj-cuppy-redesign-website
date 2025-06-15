
import { useState, useEffect } from 'react';
import { Play, Pause, Volume2, Calendar, MapPin, Music, Instagram, Twitter, Facebook, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tracks = [
    { title: "Summer Vibes Mix", duration: "3:45", genre: "Deep House" },
    { title: "Midnight Sessions", duration: "4:12", genre: "Tech House" },
    { title: "Festival Anthem", duration: "3:28", genre: "Progressive" },
    { title: "Chill Sundays", duration: "5:03", genre: "Ambient" }
  ];

  const upcomingEvents = [
    { date: "Dec 20", venue: "Club Skybar", location: "Lagos, Nigeria", time: "10:00 PM" },
    { date: "Dec 25", venue: "Beach Festival", location: "Victoria Island", time: "6:00 PM" },
    { date: "Jan 1", venue: "New Year Bash", location: "Lekki Phase 1", time: "11:00 PM" }
  ];

  const gallery = [
    { id: 1, event: "Lagos Music Festival 2024" },
    { id: 2, event: "Corporate Event - GTBank" },
    { id: 3, event: "Wedding Reception" },
    { id: 4, event: "Nightclub Performance" },
    { id: 5, event: "Beach Party Vibes" },
    { id: 6, event: "Private Birthday Party" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              DJ CUPPY
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
              <a href="#music" className="hover:text-purple-400 transition-colors">Music</a>
              <a href="#events" className="hover:text-purple-400 transition-colors">Events</a>
              <a href="#gallery" className="hover:text-purple-400 transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
            <Button className="md:hidden bg-purple-600 hover:bg-purple-700">Menu</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        
        <div className="text-center z-10 px-4 max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <Music className="w-20 h-20 md:w-28 md:h-28 text-purple-400" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              DJ CUPPY
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
            Spinning beats that move your soul • Lagos • Nigeria
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 text-lg">
              <Play className="w-5 h-5 mr-2" />
              Listen Now
            </Button>
            <Button variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg">
              Book Event
            </Button>
          </div>
        </div>
      </section>

      {/* Music Player Section */}
      <section id="music" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Latest Tracks
          </h2>
          
          <div className="grid gap-6 md:gap-8">
            {tracks.map((track, index) => (
              <Card key={index} className="bg-black/40 backdrop-blur-md border-white/10 hover:bg-black/60 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4 flex-1">
                      <Button 
                        size="sm" 
                        className="bg-purple-600 hover:bg-purple-700 rounded-full w-12 h-12 p-0 group-hover:scale-110 transition-transform"
                        onClick={() => {
                          setCurrentTrack(index);
                          setIsPlaying(!isPlaying || currentTrack !== index);
                        }}
                      >
                        {isPlaying && currentTrack === index ? 
                          <Pause className="w-5 h-5" /> : 
                          <Play className="w-5 h-5" />
                        }
                      </Button>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg truncate">{track.title}</h3>
                        <p className="text-purple-400 text-sm">{track.genre}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <Volume2 className="w-4 h-4" />
                      <span>{track.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md border-white/10 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">{event.date}</div>
                    <h3 className="text-xl font-semibold mb-2">{event.venue}</h3>
                    <div className="flex items-center justify-center text-gray-300 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center justify-center text-gray-300 mb-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Get Tickets
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Event Gallery
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {gallery.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 aspect-square hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <Music className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 text-purple-400" />
                    <p className="text-xs md:text-sm font-medium">{item.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Book DJ Cuppy</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>bookings@djcuppy.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span>+234 (0) 123 456 7890</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Send Booking Request
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Follow the Journey</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                    <Instagram className="w-5 h-5 mr-2" />
                    Instagram
                  </Button>
                  <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                    <Twitter className="w-5 h-5 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                    <Facebook className="w-5 h-5 mr-2" />
                    Facebook
                  </Button>
                  <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                    <Music className="w-5 h-5 mr-2" />
                    Spotify
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            DJ CUPPY
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 DJ Cuppy. All rights reserved. • Designed with ❤️ for the music
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
