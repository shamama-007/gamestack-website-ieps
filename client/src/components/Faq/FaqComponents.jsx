import "../customStyle.scss";

const FaqComponents = () => {
    return (
        <>
            <section className="plan-container container">
                <div className="text-center">
                    <h2>Frequently Asked Questions</h2>
                    <h6>a collection of common questions and answers about a topic</h6>
                </div>
                <div className="accordion">
                    <div className="accordion-item">
                        <input type="checkbox" id="accordion1" />
                        <label htmlFor="accordion1" className="accordion-item-title"><span className="icon"></span>Does Game Stack physical or digital games on rent?</label>
                        <div className="accordion-item-desc">Game Stack only offers physical games at the doorstep of our subscribers.</div>
                    </div>

                    <div className="accordion-item">
                        <input type="checkbox" id="accordion2" />
                        <label htmlFor="accordion2" className="accordion-item-title"><span className="icon"></span>What if I complete all my allowed swap of games before the end of my month, should I have to wait now?</label>
                        <div className="accordion-item-desc">No, you don’t need to wait; just left us know so we can start your next month immediately and your rental date will also be shifted to this date going forward.

                            For Instance: You are availing our novice package which renews 1st of every month and your monthly swap of 2 games have finished by the 20th of the month, so you don’t need to wait 10 days. Let us know we can start your next month immediately on 21st and you can continue enjoying games. Your next rent will now continue to fall due on 21st of every month.</div>
                    </div>

                    <div className="accordion-item">
                        <input type="checkbox" id="accordion3" />
                        <label htmlFor="accordion3" className="accordion-item-title"><span className="icon"></span>How much time will it take for a Novice member to request for newly released games?</label>
                        <div className="accordion-item-desc">It varies and depends upon the length and popularity of the game. We usually provide newly released games to Novice members once it gets free from our Novice Plus and Pro members. Usually takes 5 months from the date of onboarding a game into our library.</div>
                    </div>

                    <div className="accordion-item">
                        <input type="checkbox" id="accordion4" />
                        <label htmlFor="accordion4" className="accordion-item-title"><span className="icon"></span>How Novice Plus and Pro members can have access to a new game?</label>
                        <div className="accordion-item-desc">Novice Plus or Pro members are required to inform us minimum 3 weeks before the release of any particular game only then we will be able to onboard the required number of games and will deliver them. Requests received from Novice Plus and Pro members after we have onboarded the game and added to our list will be treated as prio, </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FaqComponents