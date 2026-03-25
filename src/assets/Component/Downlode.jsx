import { MdDownload } from 'react-icons/md';
import PropTypes from 'prop-types';

const ResumeDownload = ({ compact = false }) => {
    return (
        <div className="flex items-center gap-4">
            <a
                href="../Path/Sarvan_Maurya_Resume.pdf"
                download="Sarvan_Maurya_Resume.pdf"
                className={`glass-button ${compact ? 'w-full justify-center' : ''}`}
            >
                <MdDownload className="text-lg" />
                Download Resume
            </a>
        </div>
    );
};

ResumeDownload.propTypes = {
    compact: PropTypes.bool,
};

export default ResumeDownload;
