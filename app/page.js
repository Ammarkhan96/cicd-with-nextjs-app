export default function Home() {
  return (
    <div style={{padding:"40px"}}>
      <h1>My Next App Deployed with CI/CD</h1>
      <p>Hello from Ubuntu Laptop 🚀</p>
      <p>API URL: {process.env.NEXT_PUBLIC_API_URL}</p>
    </div>
  );
}