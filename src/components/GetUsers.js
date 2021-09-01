import React, { Component } from 'react'
import { connect } from 'react-redux'
import MaterialTable from "material-table";
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Paper, Dialog, DialogTitle, DialogContent, Typography, DialogActions, Button } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { getUsersAction } from '../redux/actions/getUsersAction';
import Loading from './Loading';
import Error from './Error'
import GeneralError from './GeneralError'

export class GetUsers extends Component {

    state = {
        open: false,
    }

    handleClose = () => {
        this.setState({ open: !this.state.open })
    };

    componentDidMount() {
        this.props.getUsersAction();
    }

    render() {

        const tableIcons = {
            Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} style={{ fontSize: '20px' }} />),
            Check: forwardRef((props, ref) => <Check {...props} ref={ref} style={{ fontSize: '20px' }} />),
            Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} style={{ fontSize: '20px' }} />),
            Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} style={{ fontSize: '20px' }} color="error" />),
            DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} style={{ fontSize: '20px' }} />),
            Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} style={{ fontSize: '20px' }} color="primary" />),
            Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} style={{ fontSize: '20px' }} color="secondary" />),
            Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} style={{ fontSize: '20px' }} />),
            FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} style={{ fontSize: '20px' }} />),
            LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} style={{ fontSize: '20px' }} />),
            NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} style={{ fontSize: '20px' }} />),
            PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} style={{ fontSize: '20px' }} />),
            ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} style={{ fontSize: '20px' }} />),
            Search: forwardRef((props, ref) => <Search {...props} ref={ref} style={{ fontSize: '20px' }} />),
            SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} style={{ fontSize: '20px' }} />),
            ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} style={{ fontSize: '20px' }} />),
            ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} style={{ fontSize: '20px' }} />)
        };
        return (
            <div className="pt-4">
                {console.log(this.props.getUsers)}
                <Dialog open={this.state.open}>
                    <DialogTitle id="customized-dialog-title"
                        onClose={this.handleClose}>
                        Modal title
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </Typography>
                        <Typography gutterBottom>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                            lacus vel augue laoreet rutrum faucibus dolor auctor.
                        </Typography>
                        <Typography gutterBottom>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={this.handleClose} color="primary">
                            Save changes
                        </Button>
                    </DialogActions>
                </Dialog>


                {this.props.getUsers.loading ? <Loading /> :
                    this.props.getUsers.error !== null ? (
                        <Error error={this.props.getUsers.error} />
                    ) : this.props.getUsers.data !== null ? (

                        <MaterialTable
                            components={{
                                Container: props => <Paper {...props} elevation={0} />
                            }}
                            icons={tableIcons}
                            title=""
                            columns={[
                                { title: 'Name', field: 'name' },
                                { title: 'Email', field: 'email' },
                                { title: 'Gender', field: 'gender' },
                                { title: 'Role', field: 'role' },
                                ]}
                                data={
                                    this.props.getUsers.data.users.map(user => {
                                        return {
                                            name: user.name,
                                            email: user.email,
                                            gender: user.gender,
                                            role: user.role,
                                        }
                                    })
                                }
                            actions={[
                                {
                                    icon: tableIcons.Edit,
                                    tooltip: 'Save User',
                                    onClick: (event, rowData) => this.setState({ open: !this.state.open })
                                },
                                rowData => ({
                                    icon: tableIcons.Delete,
                                    tooltip: 'Delete User',
                                    onClick: (event, rowData) => window.confirm("You want to delete " + rowData.name),
                                    disabled: rowData.birthYear < 2000
                                })
                            ]}
                            options={{
                                actionsColumnIndex: -1,
                                exportButton: true,
                                rowStyle: {
                                    fontSize: 15,
                                    color: grey[600]
                                },
                                headerStyle: {
                                    fontSize: 17,
                                    fontWeight: 500,
                                    textTransform: 'uppercase'
                                },
                                searchFieldStyle: {
                                    fontSize: 17,
                                }
                            }}
                        />

                    ) : <GeneralError />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    getUsers: state.getUsers
})

export default connect(mapStateToProps, { getUsersAction })(GetUsers);
