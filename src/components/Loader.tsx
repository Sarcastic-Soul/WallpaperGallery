import { forwardRef } from 'react';
import { LoaderProps } from '../typescript/Interface';


const Loader = forwardRef<HTMLDivElement, LoaderProps>(({ }, ref) => (
    <div ref={ref} className="flex justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
));

export default Loader;