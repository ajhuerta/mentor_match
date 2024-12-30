import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import SurveyForm from '../../../../components/SurveyForm'

const page = async ({}) => {
    const session = await getServerSession(authOptions)
    if(!session) notFound()

    // ids of people who sent current logged in user a friend requests
    // const incomingSenderIds = (await fetchRedis('smembers', 
    // `user:${session.user.id}:incoming_friend_requests`
    // )) as string[]

    // const [details, setDetails] = useState({
    //     staus: "", // Mentor, Mentee, Both
    //     college: "", // only wright is available at the moment
    // })
    // const handleSubmit = (e: any) => {
    //     e.preventDefault();

    // }
    // const incomingFriendRequests = await Promise.all(
    //     incomingSenderIds.map(async (senderId) => {
    //         const sender = await fetchRedis('get', `user:${senderId}`) as string
    //         const senderParsed = JSON.parse(sender) as User
    //         return {
    //             senderId,
    //             senderEmail: senderParsed.email
    //         }
    //     })
    // )

    return ( 
    <>
    <SurveyForm/>
    </>

)}
export default page
