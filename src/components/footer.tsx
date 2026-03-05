export const Footer = () => (
  <footer className="w-full py-8 text-center text-sm text-muted">
    <div className="flex flex-col gap-4">
      <p>© 2026 Hush. Built with care for a quieter digital life.</p>
      <div className="flex items-center justify-center gap-6">
        <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
        <a href="mailto:hello@hush.app" className="hover:text-foreground transition-colors">Support</a>
      </div>
    </div>
  </footer>
);
