import Lottie from 'lottie-react';
import jsonData from '../../assets/lottie/404.json'
import { useNavigate } from 'react-router';

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
      <div className='h-screen'>
        <div className='flex-center flex-col h-full'>
          <Lottie animationData={jsonData} />
        <p className='font-cursive font-bold text-4xl italic'>Page Not Found</p>
        <div className='mt-4 space-x-2'>
            <button onClick={() => navigate('/')} className='btn bg-main'>Go Home</button>
            <button onClick={() => navigate(-1)} className='btn bg-sec text-white'>Go Back</button>
        </div>
        </div>
      </div>
    );
};

export default PageNotFound;