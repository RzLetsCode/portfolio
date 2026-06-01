export default function Loading() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      {/* Spinner */}
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          border: '3px solid rgba(34,211,238,0.2)',
          borderTop: '3px solid #22d3ee',
          animation: 'spin 0.8s linear infinite',
        }}
      />
      <p style={{ color: '#64748b', fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        Loading...
      </p>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
