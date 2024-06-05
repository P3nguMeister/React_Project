import ProfileComp from "./ProfileComp";
import UserComments from "./UserComments";
import SidebarComp from "./SidebarComp";

function ProfilePageComm() {
    return (
        <div style={styles.container}>
            <SidebarComp profilePicture={"/avatar.jpg"} name={"TestUser"} />
            <div style={styles.mainContent}>
                <ProfileComp avatar={"avatar.jpg"} />
                <h2>Posted Comments</h2>
                <UserComments />
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        background: "#e9ecef",
        minHeight: "100vh",
        width: "100%",
    },
    mainContent: {
        flex: 1,
        padding: "20px",
        marginLeft: "250px", // Adjust this value if the sidebar width changes
        boxSizing: "border-box",
    },
};

export default ProfilePageComm;
