import AppLayout from "../components/AppLayout";
import Head from 'next/head'
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {

    const followerList = [{ nickname: 'jason'}, { nickname: 'ass'}, { nickname: 'nodeBird'}]
    const followingList = [{ nickname: 'jason'}, { nickname: 'ass'}, { nickname: 'nodeBird'}]

    return (
        <>
            <Head>
                <title>my profile | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="following list" data={followingList}/>
                <FollowList header="follower list" data={followerList}/>
            </AppLayout>
        </>
    )
};

export default Profile