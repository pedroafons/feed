export default function BoxReview() {
    return (
        <div>
            <div className={`
                bg-purple-500 m-2 rounded w-[32rem] h-[21rem]
            `}>
                <img className="object-cover w-[32rem] h-[21rem] rounded" src="https://tm.ibxk.com.br/2023/11/12/12084659815000.jpg?ims=1200x675" alt="" />
            </div>
            <div className="mx-2 my-2 text-xl w-[32rem] font-bold">
            Metal Slug: Uma Odisseia Explosiva Pelos Corredores da Nostalgia
            </div>
            <div className="mx-2 my-2 text-sm w-[32rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus id lacus at pretium. Suspendisse porttitor volutpat turpis, eget sodales arcu mattis porta. Suspendisse potenti. Phasellus metus magna, mollis sed finibus ut, feugiat et lorem...
            </div>
        </div>
    )
}