import { motion } from 'framer-motion';

// 📸 Replace these image URLs with your own team photos:
// Place files in public/images/ and use paths like '/images/team-alex.jpg'
const team = [
  {
    name: 'Alex Morgan',
    role: 'Chief Technology Officer',
    image: '/images/team-alex.jpg', // Replace with your photo
    fallbackImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Systems Architect',
    image: '/images/team-sarah.jpg', // Replace with your photo
    fallbackImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
  },
  {
    name: 'Marcus Johnson',
    role: 'Cloud Infrastructure Lead',
    image: '/images/team-marcus.jpg', // Replace with your photo
    fallbackImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-white py-24 md:py-32 overflow-hidden">
      {/* Marquee Banner */}
      <div className="mb-16 md:mb-24 overflow-hidden border-y border-black/10 py-6">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="font-display text-6xl md:text-8xl font-bold text-stroke mx-8">
              MEET THE TEAM -
            </span>
          ))}
        </motion.div>
      </div>

      {/* Team Grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale-hover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = member.fallbackImage;
                  }}
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-white/80">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
