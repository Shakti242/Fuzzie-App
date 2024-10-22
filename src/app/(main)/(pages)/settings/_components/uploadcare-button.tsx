import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';

function UploadCareButton() {
    return (
        <div>
            <FileUploaderRegular
                sourceList="local, url, camera, dropbox"
                classNameUploader="uc-light"
                pubkey="7148cd26b36d1cb22029"
            />
        </div>
    );
}

export default UploadCareButton