import Button from '../../components/ui/Button';

export default function NotFound() {
  return (
    <section style={{ padding: '200px 0 120px', textAlign: 'center' }}>
      <div className="container">
        <p className="h6">Error 404</p>
        <h1 className="h1" style={{ marginTop: 8 }}>
          Page not found
        </h1>
        <p style={{ margin: '24px auto 40px', maxWidth: 480 }}>
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Button to="/" size="large">
          Back to homepage
        </Button>
      </div>
    </section>
  );
}
