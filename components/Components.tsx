import { FiFile, FiFolder, FiMapPin, FiPhoneCall } from "react-icons/fi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const Dialog = async (
  title: any,
  text: any,
  icon: any,
  confirmColor: any,
  cancelColor: any,
) => {
  const result = await MySwal.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    confirmButtonColor: confirmColor,
    cancelButtonColor: cancelColor,
    customClass: {
      popup: "rounded-lg p-5 text-center",
      title: "text-xl font-bold",
      confirmButton:
        "px-5 py-2 rounded bg-green-500 hover:bg-green-600 text-white",
      cancelButton: "px-5 py-2 rounded bg-red-500 hover:bg-red-600 text-white",
    },
  });

  return result.isConfirmed;
};

export const NameSkeleton = () => {
  return<span className="inline-block h-10 w-40 bg-green-300 rounded animate-pulse" />
};

export const AvatarSkeleton = () => (
    <div className="w-12 h-12 rounded-full bg-green-300 animate-pulse" />
);


export const WorkerCardSkeleton = () => {
  return (
    <div className="shadow-lg rounded-xl bg-green-200 w-full flex flex-row gap-2 p-5 animate-pulse">
      <div className="rounded-full h-20 w-20 bg-green-300" />
      <div className="flex flex-col gap-2 flex-1">
        <div className="h-6 w-1/2 bg-green-300 rounded"></div>
        <div className="flex items-center gap-2 text-red-500">
          <FiMapPin />
          <div className="h-4 w-1/3 bg-green-300 rounded"></div>
        </div>
        <div className="flex items-center gap-2 text-blue-500">
          <FiPhoneCall />
          <div className="h-4 w-1/4 bg-green-300 rounded"></div>
        </div>
        <div className="h-8 w-20 bg-green-400 rounded-lg mt-2"></div>
      </div>
    </div>
  );
};


export const ProfileCardSkeleton = () => {
  return (
    <div className="flex flex-col items-start w-2/3 gap-5 bg-white p-5 rounded-xl animate-pulse">
      
      <div className="h-8 w-8 bg-green-300 rounded-full" />

      <div className="flex flex-row items-center gap-4 w-full">
        <div className="h-12 w-12 rounded-full bg-green-300" /> 
        <div className="flex flex-col gap-2">
          <div className="h-6 w-40 bg-green-300 rounded" /> 
          <div className="h-4 w-32 bg-green-300 rounded" />
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full bg-white/40 p-2 rounded-lg">
        <div className="h-4 w-20 bg-green-300 rounded" /> 
        <div className="h-16 w-full bg-green-300 rounded" /> 
      </div>

      <div className="flex flex-row w-full gap-5">
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-4 w-24 bg-green-300 rounded" /> 
          <div className="h-10 w-full bg-green-300 rounded" /> 
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-4 w-24 bg-green-300 rounded" /> 
          <div className="h-10 w-full bg-green-300 rounded" /> 
        </div>
      </div>

      <div className="flex flex-row w-full gap-5">
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-4 w-24 bg-green-300 rounded" /> 
          <div className="h-10 w-full bg-green-300 rounded" /> 
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-4 w-24 bg-green-300 rounded" /> 
          <div className="h-10 w-full bg-green-300 rounded" /> 
        </div>
      </div>

      <div className="h-10 w-full bg-green-300 rounded" />
    </div>
  );
};


export const WorkerProfile = () => {
  return (
    <div className="flex flex-col items-start lg:w-2/3 w-full gap-5 bg-white p-5 rounded-xl animate-pulse">
      
      <div className="h-8 w-8 bg-green-300 rounded-full" />

      <div className="flex flex-row items-center gap-4 w-full">
      
        <div className="h-12 w-12 rounded-full bg-green-300" />
        <div className="flex flex-col gap-2 flex-1">
          
          <div className="h-6 w-48 bg-green-300 rounded" />
          
          <div className="h-4 w-32 bg-green-300 rounded" />
         
          <div className="flex flex-row gap-2 items-center mt-2">
            <div className="h-8 w-32 bg-green-300 rounded" />
            <div className="h-6 w-16 bg-green-300 rounded" />
          </div>
        </div>
      </div>

      
      <div className="h-16 w-full bg-green-300 rounded" />

     
      <div className="flex flex-col lg:flex-row gap-5 font-bold mt-2">
        <div className="h-6 w-40 bg-green-300 rounded" />
        <div className="h-6 w-32 bg-green-300 rounded" />
      </div>

    
      <div className="flex flex-col gap-4 mt-4 w-full">
        <div className="h-6 w-48 bg-green-300 rounded" /> 
        <div className="flex flex-col gap-3 h-auto">
         
            <div className="flex flex-row gap-2 bg-green-200 p-4 rounded-xl w-full">
      
              <div className="h-10 w-10 rounded-full bg-green-300" />
              <div className="flex flex-col gap-2 flex-1">
                <div className="h-4 w-32 bg-green-300 rounded" />
                
                <div className="flex flex-row gap-1">
                  {Array(5).fill(0).map((_, starIdx) => (
                    <div key={starIdx} className="h-4 w-4 bg-green-300 rounded-full" />
                  ))}
                </div>
                <div className="h-10 w-full bg-green-300 rounded" /> 
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export const BookingSkeleton = () => {
  return (
    <div className="flex flex-col items-left lg:w-2/3 w-full gap-5 bg-white p-5 rounded-xl animate-pulse">
      
      <div className="h-6 w-48 bg-green-300 rounded" />

      <div className="flex flex-row gap-2 items-center bg-gray-200 p-2 rounded-sm w-full">
        <div className="h-5 w-5 bg-green-300 rounded" />
        <div className="h-8 w-full bg-green-300 rounded" />
      </div>

      <div className="flex flex-row gap-2 items-start bg-gray-200 p-2 rounded-sm w-full">
        <div className="h-5 w-5 bg-green-300 rounded" /> 
        <div className="h-16 w-full bg-green-300 rounded" />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-3 bg-gray-200 p-3 rounded-md">
          <div className="h-5 w-5 bg-green-300 rounded" />
          <div className="h-8 w-full bg-green-300 rounded" />
        </div>
        <div className="h-8 w-40 bg-green-300 rounded self-start" /> 
        <div className="h-4 w-60 bg-green-200 rounded text-xs" /> 
      </div>

      <div className="flex flex-row gap-2 items-center bg-gray-200 p-2 rounded-sm w-full">
        <div className="h-5 w-5 bg-green-300 rounded" />
        <div className="h-8 w-full bg-green-300 rounded" />
      </div>

      <div className="flex flex-row gap-2 items-center bg-gray-200 p-2 rounded-sm w-full">
        <div className="h-5 w-5 bg-green-300 rounded" />
        <div className="h-8 w-full bg-green-300 rounded" />
      </div>

      <div className="flex flex-row gap-2 items-center bg-gray-200 p-2 rounded-sm w-full">
        <div className="h-5 w-5 bg-green-300 rounded" />
        <div className="h-8 w-full bg-green-300 rounded" />
      </div>

      <div className="flex flex-row gap-2 items-center bg-gray-200 p-2 rounded-sm w-full">
        <div className="h-5 w-5 bg-green-300 rounded" />
        <div className="h-8 w-full bg-green-300 rounded" />
      </div>

      <div className="h-10 w-full bg-green-300 rounded" />
    </div>
  );
};



interface EmptyStateProps {
  message?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ( {message} ) => {
  return (
    <div className="flex flex-col items-center h-50 justify-center text-center text-gray-500 gap-4">
      <FiFolder className="text-6xl"/>
      <p className="text-lg font-semibold">{message}</p>
      <p className="text-sm text-gray-400">Try adjusting your search or filter.</p>
    </div>
  );
};




