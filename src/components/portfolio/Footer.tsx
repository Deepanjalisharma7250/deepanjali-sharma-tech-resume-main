const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold">Deepanjali Sharma</p>
          <p className="text-sm text-background/70">
            Full-Stack Developer | M.Tech CSE Student | Tech Enthusiast
          </p>
          <p className="text-xs text-background/60">
            © 2025 Deepanjali Sharma. All rights reserved.
          </p>
          <p className="text-xs text-background/60">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;