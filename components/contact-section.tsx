"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-100">Get In Touch</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          I'm currently seeking Summer 2025 internship opportunities in software engineering. Feel free to reach out if
          you'd like to connect!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-slate-900/50 border-cyan-500/30 p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-slate-100 mb-6">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <p className="text-slate-300 font-semibold">Email</p>
                  <a
                    href="mailto:sivaganesh193@gmail.com"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    sivaganesh193@gmail.com
                  </a>
                  <br />
                  <a href="mailto:balagane@purdue.edu" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    balagane@purdue.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <p className="text-slate-300 font-semibold">Phone</p>
                  <p className="text-slate-400">+1 (765) 701-0193</p>
                  <p className="text-slate-400">+91 9176733193</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <p className="text-slate-300 font-semibold">Location</p>
                  <p className="text-slate-400">West Lafayette, IN</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700">
                <p className="text-slate-300 font-semibold mb-3">Connect with me</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/sivaganesh-balaganesh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin size={20} />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/sivaganesh193"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={20} />
                    <span className="text-sm">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-900/50 border-cyan-500/30 p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-slate-100 mb-6">Send a Message</h3>

            <form className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-500"
                />
              </div>
              <div>
                <Input
                  placeholder="Subject"
                  className="bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-500"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-500"
                />
              </div>
              <Button className="w-full bg-cyan-600 hover:bg-cyan-700">Send Message</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
