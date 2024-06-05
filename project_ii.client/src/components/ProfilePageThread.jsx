import ProfileComp from "./ProfileComp";
import SidebarComp from "./SidebarComp";
import UserThreads from "./UserThreads";

function ProfilePageThreads() {
    return (
        <div style={styles.container}>
            <SidebarComp profilePicture={"/avatar.jpg"} />
            <div style={styles.mainContent}>
                <ProfileComp avatar={"avatar.jpg"} />
                <h2>Posted Threads</h2>
                <UserThreads />
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

export default ProfilePageThreads;
