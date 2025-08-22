const sampleProducts = [
  { id: 1, name: "Wireless Mouse", price: 19.99, description: "A smooth and fast mouse." },
  { id: 2, name: "Mechanical Keyboard", price: 59.99, description: "Clicky keys for productivity." },
  { id: 3, name: "USB-C Hub", price: 29.99, description: "Expand your laptop ports." },
];

export default function ProductHighlights() {
  return (
    <section className="py-12 border-t">
      <h2 className="text-3xl font-bold text-center mb-8">Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {sampleProducts.map((p) => (
          <div key={p.id} className="p-6 border rounded shadow-sm">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-gray-600">{p.description}</p>
            <p className="mt-2 font-bold">${p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
