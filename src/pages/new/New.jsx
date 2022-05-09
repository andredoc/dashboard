import "./new.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New = ({inputs, title}) => {
    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img 
                            src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" 
                            alt="" 
                        />
                    </div>
                    <div className="right">
                        <form action="">
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input type="file" id="file" style={{display:"none"}} />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder="andre_documet" />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Name and surname</label>
                                <input type="text" placeholder="Andre Documet" />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder="andre.documet@gmail.com" />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Phone</label>
                                <input type="text" placeholder="+34 611 106 857" />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Password</label>
                                <input type="password" placeholder="password" />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Address</label>
                                <input type="text" placeholder="Calle Serrano 5-A, Madrid" />
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Country</label>
                                <input type="text" placeholder="SPAIN" />
                            </div>
                            <button>Send</button>
                        </form>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New;