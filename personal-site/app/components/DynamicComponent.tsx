
import dynamic from 'next/dynamic';

export const DynamicComponent = dynamic(() => import('./TypewriterComp'), {
    loading: () => <p>Loading...</p>,
});