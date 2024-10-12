import { MdDownload } from 'react-icons/md';

const ResumeDownload = () => {
    return (
        <div className="flex items-center gap-4 md:block hidden">
            <a
                href="../Path/SarvanMauryaresume.pdf"
                download="SarvanMauryaresume.pdf"
                className="py-2 px-4 border border-gray-300 text-black rounded flex items-center gap-2 hover:bg-gray-200 dark:text-black hover:dark:text-black transition duration-300"
            >
                <MdDownload className="text-lg" />
                Download CV
            </a>
        </div>
    );
};

export default ResumeDownload;
