export const LeaveAComment = () => {
    return <section className="bg-gray-100 my-auto rounded-xl h-screen w-screen">
        <div className="m-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form action="" className="space-y-4">
                        <div>
                            <label className="sr-only" htmlFor="name">Owner name</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Owner name"
                                type="text"
                                id="name"
                            />
                        </div>
                        <div>
                            <div>
                                <label className="sr-only" htmlFor="cat-name">Cat name</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Pet name"
                                    type="text"
                                    id="cat-name"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="sr-only" htmlFor="message">Message</label>
                            <textarea
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Message"
                                id="message"
                            ></textarea>
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                Send Feedback
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
}
