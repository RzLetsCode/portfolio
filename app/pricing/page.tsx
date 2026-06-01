import type { Metadata } from 'next';
import Pricing from '../../components/Pricing';

export const metadata: Metadata = {
  title: 'Pricing & Plans | code2career_ai',
  description: 'Choose the plan that fits your AI learning journey. Start free with Explore, level up with Career Focus, or go deep with Mentor Loop.',
};

export default function PricingPage() {
  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <Pricing />
    </main>
  );
}
