import Footer from "../components/Layout/Footer"
import Navbar from "../components/Layout/Navbar"

const TermAndCondition = () => {
    return (
        <>
            <Navbar />
            <div className="container term-and-condition">
                <h3 className="text-white text-center">Playstation Rental Terms & Conditions</h3>

                <h4>Game(s) Selection Process:</h4>
                <p>Game(s) selection is subject to availability of a Game(s) in
                    our library at the time of swap. In case a member wishes to wait for any specific game,
                    rent will be charged until the game(s) is being arranged.</p>


                <h4>Newly Released Game(s):</h4>
                <p>A Game which is 4 months old from the date of availability in
                    Pakistan to be considered a newly released game.</p>

                <h4>Newly Released Game(s) Availability for Novice Plus / Pro Members:</h4>
                <p>Novice Plus
                    and Pro members will receive newly released games after 4-6 working days or availability
                    of a game in Pakistan (whichever is earlier) on a first-come, first-serve basis. Member
                    must share their willingness to play an upcoming game at least 10 days before the official
                    release date; otherwise, desired game will be provided in the second batch.</p>

                <h4>Newly Released Game(s) Availability for Novice Members:</h4>
                <p>Novice members will be
                    given newly released games after 4 months with respect to the queue.</p>


                <h4>Utilization of Newly Released Game for Novice Plus / Pro Members:</h4>
                <p>Pro members
                    can take only one newly released game in each swap along with any other game available
                    in the library. While, Novice Plus member can take only one Newly released game per
                    month.</p>

                <h4>Special Instructions for Members Residing Outside Karachi:</h4>

                <ol type="1">
                    <li>Member residing outside Karachi is required to return the Game(s) on their own
                        expense and to be shipped by only a private courier company.</li>
                    <li>Member must ensure safe return of a Game(s) to our office. He must use bubble
                        wrap or box. In case of any damage, member will be held responsible.</li>
                    <li>The next game(s) will only be dispatched to a member, once his previous game(s)
                        are received in good order.</li>
                </ol>


                <h4>Queue</h4>
                <p>Queue  shall be maintained for  game(s) not released or available  in the library
                    and will be dispatched to the members in respective manner.</p>



                <h4>Game Swap / Delivery: </h4>
                <p>In case of non-utilization of a game(s) swap or delivery, it will not
                    carry forward to the next month.</p>




                <h4>Monthly Rental: </h4>
                <p>Rent will continue to charge on every rental / subscription date unless
                    membership is being paused.</p>




                <h4>Delay in Rental Payment:</h4>
                <p>Three (03) consecutive rent delays enable us to cancel the
                    subscription, collect back the game(s,) and deduct the dues from the deposit. </p>


                <h4>Minimum Membership Period:</h4>
                <p>The minimum membership period is three (03)
                    consecutive months.</p>


                <h4>Pause / Cancellation of Membership:</h4>
                <p>In case of Pause / Cancellation, the member is
                    responsible  to  communicate  us  in  writing  and  to  dispatch  the  game(s)  to  our  office
                    address before the next rental / subscription date. The expense for the return delivery to
                    be borne by the member.</p>


                <h4>Refund of Deposit:</h4>
                <p>Deposit refund will take 7 working days after receipt of a game(s).
                    Any rental payment / other dues will be deducted before transferring the deposit.</p>



                <h4>Standard Delivery Time:</h4>
                <p>Standard delivery time for Karachi is 1-2 working days and 3-
                    4  working  days  for  other  cities.  Members  residing  outside  Karachi  may  face  delays  in
                    delivery on account of any unforeseen events.</p>


                <h4>Deliveries in Packages:</h4>
                <p>All packages cover only two (02) free deliveries. In case of the
                    3rd delivery, standard charges will be applied (Intercity (Karachi) Rs.300/, Intracity (other
                    cities) Rs.400/).</p>


                <h4>Mishandling / Damage:</h4>
                <p>In case of damage to the disc or case, the current retail price of
                    the discs and case price (Rs.500) will be deducted. Membership will be marked on hold
                    until the payment is made.</p>



                <h4>Failed Delivery Attempts by Rider / Courier Company:</h4>
                <p>Failed delivery attempts will be
                    considered as a standard delivery.</p>



                <h4>To Add an Uncommon Game in Library</h4>
                <p>A minimum of 10 recommendations from our
                    members are required to add an uncommon game in a rental library.</p>



                <h4>Package  Upgrade:</h4>
                <p>Members  are  not  eligible  to  upgrade  or  downgrade  their  package
                    until a minimum membership period of three (03) months are completed. Once a package
                    is  upgraded,  again  a  minimum  tenor  of  three  (03)  months  are  required  for  any  further
                    change</p>



                <h4>Game Editions:</h4>
                <p>Only Standard edition of a game can be added into the library.</p>



                <h4>Disqualification of Membership:</h4>
                <p>We reserve the right to cancel membership in case of
                    misbehaving, inappropriate communication and or continuous mishandling of game(s) by
                    the member.</p>

                <h4>Amendments in Terms & Conditions:</h4>
                <p>We reserve the rights to make changes in Terms
                    and Conditions anytime and shall be communicated to members.</p>


                <p>Please acknowledge the above Terms and Conditions by executing this document.</p>
            </div>
            <Footer />
            {/* Custom styles inside the component */}
            <style jsx>{`
                .term-and-condition h4 {
                    color:rgb(224, 224, 224); /* Blue color */
                    font-weight: bold;
                }

                .term-and-condition p, .term-and-condition ol li {
                    color:rgb(187, 187, 187); /* Light gray */
                    line-height: 1.6;
                }
            `}</style>
        </>
    )
}

export default TermAndCondition