import { isBlockedByUser } from '@/lib/block-service';
import { isFollowingUser } from '@/lib/follow-service';
import { getUserByUserName } from '@/lib/user-service';
import { notFound } from 'next/navigation';
import { Actions } from './_components/actions';

interface UserPageProps {
    params: {
        username: string;
    };
}

const UserPage = async ({ params }: UserPageProps) => {
    const user = await getUserByUserName(params.username);

    if (!user) {
        notFound();
    }

    const isFollowing = await isFollowingUser(user.id);
    const isBlocked = await isBlockedByUser(user.id);

    /* if (isBlocked) {
        notFound();
    } */

    return (
        <div className="flex flex-col gap-y-4">
            <p>Username : {user.username}</p>
            <p>User ID : {user.id}</p>
            <p>Is Following : {`${isFollowing}`}</p>
            <p>Is Blocked by this user: {`${isBlocked}`}</p>
            <Actions isFollowing={isFollowing} userId={user.id} />
        </div>
    );
};

export default UserPage;
