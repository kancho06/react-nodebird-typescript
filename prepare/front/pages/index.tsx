import AppLayout from "../components/AppLayout";
import { useSelector } from "react-redux";
import { InitialState } from "../reducers";
import { PostForm } from "../components/PostForm";
import { PostCard } from "../components/PostCard";
import { MainPost } from "../reducers/post";

const Home = () => {
    const { isLoggedIn } = useSelector((state: InitialState) => state.user);
    const { mainPosts } = useSelector((state: InitialState) => state.post);
    // 데이터가 중간에 추가가 되거나 바뀌는 형식의 자료라면 key는 인덱스를 사용하면 안된다.
    return (
        <AppLayout>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((mainPost: MainPost) => (
                <PostCard key={mainPost.id} mainPost={mainPost} />
            ))}
        </AppLayout>
    );
};

export default Home;
