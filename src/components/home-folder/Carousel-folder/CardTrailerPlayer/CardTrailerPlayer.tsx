import React from 'react';
import ReactPlayer from 'react-player';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  url_trailer: string | null;
}

const CardTrailerPlayer: React.FC<ModalProps> = ({ isOpen, onClose, url_trailer }) => {
  if (!isOpen || !url_trailer) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-grayDark rounded-lg shadow-lg w-[720px] h-[400px] mx-4">
        <div className="">
          <ReactPlayer controls={true} url={url_trailer} width={720} height={400}/>
        </div>
        <div className="flex justify-end  p-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blueWhite text-white rounded hover:bg-blueWhite/90"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTrailerPlayer;
