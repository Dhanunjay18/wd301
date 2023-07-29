import { deleteMember } from "../../context/members/actions";
import { useMembersState, useMembersDispatch } from "../../context/members/context";

export default function MemberListItems() {
    let state : any = useMembersState();
    const {members, isLoading, isError, errorMessage} = state;
    if(members.length===0 && isLoading){
        return <span> Loading Members... </span>
    }   
    if(isError){
        return <span>{errorMessage}</span>
    }
    const dispatchMembers = useMembersDispatch();
    const deleteHandler = async (id: number) => {
      await deleteMember(dispatchMembers, id);
    }
    return (
        <>
          {members.map((member: any) => (
            <div key={member.id} className="member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{member.name}</h5>
              <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{member.email}</h5>
              <button onClick={() => {deleteHandler(member.id)}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ))}        
        </>
      );
}