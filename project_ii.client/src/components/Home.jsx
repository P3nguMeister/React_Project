import { useContext, useState, useEffect } from "react";
import ThreadCreateComp from "./ThreadCreateComp";
import Thread from "./Thread";
import SidebarComp from "./SidebarComp";
import axios from 'axios';
import { UserContext } from './Context';

function Home() {
    const { userData } = useContext(UserContext);
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7082/GetAllTickets');
                setTickets(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.response.data);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={styles.container}>
            {userData.id !== 0 && (
                <SidebarComp profilePicture="/avatar.jpg" />
            )}
            <div style={styles.content}>
                {userData.id !== 0 && <ThreadCreateComp />}
                {loading && !error && <h2 style={styles.loading}>Loading...</h2>}
                {!loading && error && <h2 style={styles.error}>An unexpected error has occurred</h2>}
                {!loading && !error && (
                    <>
                        <h2 style={styles.threadsHeader}>Threads:</h2>
                        {tickets.map((ticket, index) => (
                            <Thread
                                key={index}
                                id={ticket.id}
                                userid={ticket.userid}
                                title={ticket.title}
                                content={ticket.data}
                            />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        height: "100vh",
        width: "100%",
    },
    content: {
        flexGrow: 1,
        marginLeft: "250px", // Same width as sidebar to avoid overlap
        padding: "20px",
    },
    loading: {
        margin: "10px 0px 20px 0px",
    },
    error: {
        margin: "10px 0px 20px 0px",
    },
    threadsHeader: {
        margin: "10px 0px 20px 0px",
    },
};

export default Home;
