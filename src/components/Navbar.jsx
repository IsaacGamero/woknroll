import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-red-600 text-white p-4 flex justify-between">
      <div className="font-bold text-xl">WokNRoll</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/menu">Menú</Link>
        <Link to="/cart">Carrito</Link>
      </div>
    </nav>
  );
}
