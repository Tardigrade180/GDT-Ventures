function Footer() {
  return (
    <footer className="bg-teal-600 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} GDT Ventures. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;