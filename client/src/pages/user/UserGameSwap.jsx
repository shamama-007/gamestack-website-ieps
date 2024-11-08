import DashboardSidebar from "../../components/Layout/DashboardSidebar";
import { PiGameControllerDuotone } from "react-icons/pi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { UserEmail, UserPerson } from "../../components/SvgIcon/SvgIcon";
import { useSearchParams } from "react-router-dom";
import Model from "../../components/Modal/Model";
import { toast } from "react-toastify";
const UserGameSwap = () => {
    const [searchParams] = useSearchParams();
    const queryProductId = searchParams.get('id')
    const queryProductName = searchParams.get('name')


    const [logoutConfirm, setLogoutConfirm] = useState(false);
    const [customerGetProductDetail, setCustomerGetProductDetail] = useState([]);
    const [swapPost, setSwapPost] = useState(null);
    const { token } = useSelector((state) => state.userAuth);

    useEffect(() => {
        const getCustomerGetProductDetail = async () => {
            const response = await fetch(
                `${import.meta.env.VITE_CLIENT_API}/api/Customer/GetProdDetail`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const result = await response.json();
            console.log(result)
            setCustomerGetProductDetail(result)
        };

        getCustomerGetProductDetail();
    }, []);



    const handleChildData = (data) => {
        setLogoutConfirm(data);
    };


    const workingPurpose = async () => {
        const url = `${import.meta.env.VITE_CLIENT_API}/api/Customer/PostSwapRequest`;
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(swapPost)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(result => {
                if (result.status == 1) {
                    toast.success("Request successfully");

                } else {
                    toast.error("Some issue occurred");
                }
            setLogoutConfirm(false)

            })
            .catch(error => {
                console.error("Error:", error);
            });


    };

    // swapFormik Schema
    const swapFormik = useFormik({
        initialValues: {
            queryId: "",
            queryName: "",
            productCode: "",
        },
        // validationSchema: RegisterSchema,
        onSubmit: (values, action) => {
            setLogoutConfirm(true)

            const output = {
                request: [
                    {
                        productCode: values.productCode,
                        itemCode: values.queryId
                    }
                ],
                issue: [
                    {
                        productCode: values.productCode
                    }
                ]
            };
            setSwapPost(output);

            action.resetForm();
        },
    });




    return (
        <>
            <Model
                title={"Confirmation"}
                workingPurpose={workingPurpose}
                logoutConfirm={logoutConfirm}
                handleChildData={handleChildData}
            />
            <DashboardSidebar>
                <div className="panel-main-content">
                    <h3>GAME SWAP</h3>
                    <div className="popup">
                        <form className="form" onSubmit={swapFormik.handleSubmit}>
                            <div className="icon">
                                <PiGameControllerDuotone />
                            </div>

                            <h4 className="subHeading">REQUEST</h4>
                            <div>
                                <div className="flex-column">
                                    <label>Product Code</label>
                                </div>
                                <div className="inputForm">
                                    <UserPerson />
                                    <input type="text" name="queryId"
                                        onChange={swapFormik.handleChange}
                                        value={swapFormik.values.queryId = queryProductId} className="input" />
                                </div>
                                {swapFormik.touched.queryId && swapFormik.errors.queryId ? (
                                    <p className="error text-danger">
                                        {swapFormik.errors.queryId}
                                    </p>
                                ) : null}

                                <div className="flex-column">
                                    <label>Product Code</label>
                                </div>
                                <div className="inputForm">
                                    <UserEmail />
                                    <input type="text" name="queryName"
                                        onChange={swapFormik.handleChange}
                                        value={swapFormik.values.queryName = queryProductName} className="input" />
                                </div>
                                {swapFormik.touched.queryName && swapFormik.errors.queryName ? (
                                    <p className="error text-danger">
                                        {swapFormik.errors.queryName}
                                    </p>
                                ) : null}
                            </div>


                            <h4 className="subHeading" style={{ marginTop: "15px" }} >ISSUE</h4>

                            <div className="flex-column">
                                <label>Product Code</label>
                            </div>

                            <div className="inputForm">
                                <UserPerson />
                                <select
                                    name="productCode"
                                    onChange={swapFormik.handleChange}
                                    value={swapFormik.values.productCode}
                                >
                                    <option disabled value="">Choose Product</option>
                                    {customerGetProductDetail.map(e => (
                                        <option key={e.productCode} value={e.productCode}>
                                            {e.productName}
                                        </option>
                                    ))}
                                </select>

                            </div>


                            {swapFormik.touched.productCode && swapFormik.errors.productCode ? (
                                <p className="error text-danger">
                                    {swapFormik.errors.productCode}
                                </p>
                            ) : null}

                            <button type='submit' className="button-submit">SWAP</button>


                        </form>
                    </div>



                </div>
            </DashboardSidebar>
        </>
    );
};

export default UserGameSwap;
