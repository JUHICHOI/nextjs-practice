"use client"
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

// 특정 영역만 클라이언트 컴포넌트로 만들자
export function Control() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  return (
    <ul>
      <li><Link href="/create">Create</Link></li>
      {id ? <>
        <li><Link href={"/update/"+id}>Update</Link></li>
        <li><input type="button" value="delete" onClick={()=>{
          const options = {method:"DELETE"}
          fetch(process.env.NEXT_PUBLIC_API_URL+`topics/`+ id, options)
            .then(res=>res.json())
            .then(result=>{
              router.push('/');
              router.refresh();
          })
        }}></input></li>
      
      </> : null}
    </ul>
  );
}
