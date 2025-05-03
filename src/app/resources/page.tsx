"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteResource, getResources } from "../actions/query";
import { ResourceType } from "../types";
import { getDataAttr } from "../utils";

export default function () {
  const [pageError, setPageError] = useState<boolean>(false);
  const [resources, setResources] = useState<ResourceType[]>([]);

  useEffect(() => {
    getResources().then((data) => {
      if (data) setResources(data);
      else setPageError(true);
    });
  }, []);

  const deleteItem = async (e: React.MouseEvent<any>) => {
    e.preventDefault();
    const id = getDataAttr(e.target as HTMLElement, 'id');
    if (id && await deleteResource(id)) setResources((prevResources) => prevResources.filter(item => item.id !== id));
  }

  return <main className="relative w-full text-white overflow-clip" style={{ fontFamily: "Inter", background: "var(--unicorn)", }}>
    <Header/>
    <section className="w-full h-fit min-h-screen py-[100px] md:py-[150px] px-[25px] md:px-[60px] gap-[30px] flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-5xl flex flex-col gap-[5px]" style={{ fontFamily: "Squada One" }}>{pageError ? "504 Error" : "Resource Directory"}</h1>
      <p className="w-full max-w-[1000px] text-xl md:text-2xl text-center">{pageError ? "Error querying for resources. If this issue persists, please contact the site author." : "Add or remove resources in Sanity at the appropriate location. Orphaned resources may take a moment to delete."}</p>
      <Link href="https://deerrahill.sanity.studio/" className="w-full max-w-[1000px] text-xl md:text-2xl text-center font-semibold hover:underline underline-offset-4">Edit your posts in Sanity Studio &rarr;</Link>
      <div className="w-full max-w-[1200px] flex flex-col p-[30px] bg-white" style={{ borderRadius: "10px" }}>
        {
          resources.map((resource, i) => <Link key={i} href={`/resources/${resource.name}`}>
            <div className="w-full flex flex-row border-[#aaaaaa] border-b-1 text-lg md:text-xl text-black px-[15px] py-[5px] hover:bg-[#dddddd] justify-between">
              <p className="font-semibold">{resource.name}</p>
              {resource?.location ? <p>{resource?.location?.toUpperCase()}</p> :
                <div className="text-orange-600 flex flex-row gap-[5px]">
                  ORPHANED
                  <svg data-id={resource?.id} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" onClick={(e) => deleteItem(e)} className="h-[28px] w-[28px] hover:bg-orange-300 cursor-pointer" style={{ borderRadius: "5px" }}><path d="M277.37-111.87q-37.78 0-64.39-26.61t-26.61-64.39v-514.5h-45.5v-91H354.5v-45.5h250.52v45.5h214.11v91h-45.5v514.5q0 37.78-26.61 64.39t-64.39 26.61zm405.26-605.5H277.37v514.5h405.26zM355.7-280.24h85.5v-360h-85.5zm163.1 0h85.5v-360h-85.5zM277.37-717.37v514.5z"/></svg>
                </div>
              }
            </div>
          </Link>)
        }
      </div>
    </section>
  </main>
}