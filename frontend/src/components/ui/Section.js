function Section({ title, subtitle, children }) {
  return (
    <section className="card">
      {title && (
        <h2 className="section-title">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="subtitle mb-6">
          {subtitle}
        </p>
      )}

      {children}
    </section>
  );
}

export default Section;