export default function NotFound(){
    return(
        <div className="flex flex-col justify-center items-center w-full h-[calc(100vh-88px)] space-y-2">
            <h1 className="text-3xl font-bold">Not Found</h1>
            <span className="text-[16px]">oops! your product is not found</span>
            <span>404</span>
        </div>
    )
}