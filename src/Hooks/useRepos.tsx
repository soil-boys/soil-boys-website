import React, { useState, useEffect } from "react";

interface Repo {
    id: number,
    name: string,
    org: string,
    url: string,
    stars: string,
    forks: string,
    preview: string
}

interface UseReposResult {
    repos: Repo[],
    loadingRepos: boolean
}

function useRepos(): UseReposResult {

    const [repos, setRepos] = useState<Repo[]>([])
    const [loadingRepos, setLoadingRepos] = useState<boolean>(false)

    const url = "https://api.github.com/users/soil-boys/repos"

    const fetchData = async () => {
        setLoadingRepos(true)

        try {
            const response = await fetch(url, {
                headers: {
                    "Authorization": "danwdhajwdbcawidcuawidbacubwd"
                }
            })
            const data = await response.json()
            const repoArr: Repo[] = data.map((repo: any) => ({
                id: repo.id,
                name: repo.name,
                org: repo.owner.login,
                url: repo.html_url,
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                preview: `https://api.github.com/repos/soil-boys/${repo.name}/contents/Images/Preview.svg?ref=master`
            }))
            setRepos(repoArr)
            setLoadingRepos(false)
        } catch (err) {
            console.log(err)
        } finally {
            setLoadingRepos(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { repos, loadingRepos }

}

export default useRepos