import { Facebook, Twitter, Linkedin, Instagram, Dribbble } from 'lucide-react'

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a href="#" className="social-link">
        <Facebook size={24} />
      </a>
      <a href="#" className="social-link">
        <Twitter size={24} />
      </a>
      <a href="#" className="social-link">
        <Linkedin size={24} />
      </a>
      <a href="#" className="social-link">
        <Instagram size={24} />
      </a>
      <a href="#" className="social-link">
        <Dribbble size={24} />
      </a>
    </div>
  )
}

