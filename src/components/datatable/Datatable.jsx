import './datatable.scss'
import {userColumns, userRows} from '../../datatablesource'
// From Material UI React Table
import { DataGrid } from '@mui/x-data-grid';
import { PanoramaRounded } from '@mui/icons-material';

const Datatable = () => {
    const actionColumn=[ { field: "action", headerName:"Action", width:200, renderCell:()=>{
        return (
            <div className="cellAction">
                <div className="viewButton">View</div>
                <div className="deleteButton">Delete</div>
            </div>
        )
    }}];
    
    return (
        <div className="datatable">
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable;