"use client";

export default function MapEmbed() {
  return (
    <iframe
      title="Head office map"
      aria-label="Head office map"
      className="w-full h-60"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      style={{ border: 0 }}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.31633176404412!2d47.98846922983134!3d29.384112996161893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf85006788269d%3A0x6ce32cacac956b22!2zSU5UTyBBUlQgfCDYp9mG2KrZiCDYotix2Ko!5e0!3m2!1sen!2skw!4v1759500048606!5m2!1sen!2skw"
      allowFullScreen
    />
  );
}
