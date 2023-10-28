import React, { useState } from "react";
import { VEH_AGREEMENT_URL } from "../../Api/constants";
import { useLocation, useNavigate } from "react-router-dom";
import "./SignAgreement.css";
import { FloatButton } from "antd";
import SignatureModal from "./SignatureModal";
import { toast } from "react-toastify";
import { getAgreementDataAPI, signAgreementAPI } from "../../Api/Service";

const SignAgreement = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const signButtonClicked = () => {
    setIsModalOpen(true);
  };

  const getDateAfter7Days = () => {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 7);

    return currentDate;
  };

  const submit = async (picture) => {
    setIsModalOpen(false);
    try {
      const payLoad = {
        booking_id: data._id,
        user: true,
      };

      const response = await getAgreementDataAPI(payLoad);
      if (response.status === "1") {
        const data = response.data;
        const agreementHtml = `<div style="width: 96%; padding-right: 50px; padding-left: 30px; align-self: center; margin-top: 0;">
        <div class="container">
            <h3 align="center">VEHICLE RENTAL AGREEMENT</h3>
            <p className="p">
                This Vehicle Rental Agreement ("Agreement") is made between
                <b>Vertex Cars ltd</b> Company Registration No.11736010 with office at
                <b>1 London Road Slough SL3 7FJ ("Owner")</b>
            </p>
            <p class="p">
                and <b>${data.name}</b> ("Renter") resident of <b></b>
            </p>
            <p class="p">Renter Driving License Number <b>: </b>${data?.license_number}</p>
            <p class="p">License Expiry: ${new Date(
              data?.license_exp_date
            ).toLocaleDateString()}<b></b></p>
            <p class="p">Owner and Renter are hereinafter collectively referred to as "Parties"</p>
            <h5>
                <b class='p bold'>Car Reg #: ${data.reg_no}</b>
            </h5>
            <h5>
                <b class='p bold' >Model: ${data.model}</b>
            </h5>
            <h5>
                <b class='p bold' >Transmission: ${data.transmission}</b>
            </h5>
            <p class="p">
                1. <b>Term.</b> This Agreement shall commence on the day the Renter takes possession of Vehicle and remain in full force and effect until Vehicle is returned to Owner. Renter shall return the Vehicle unless this Agreement is terminated earlier consistent with the terms herein. This agreement is valid for 6 months from the date of commencement of agreement and renter takes possession of the vehicle, if renter wants to continue to keep the vehicle, the agreement will be renewed after every 6 months period.
            </p>
            <p class="p">
                <b>1a. Agreement Commencement Date: ${new Date().toLocaleString()}</b>
            </p>
            <p class="p">
                <b class='p bold'>1b. Vehicle due to Return ${getDateAfter7Days()}</b>
            </p>
            <p class="p">
                2. <b>Payment.</b> Renter shall pay £${
                  data?.rent
                } per week into bank account or cash on due date.
            </p>
            <p class="p">Renter shall also pay other charges in accordance with this Agreement due upon return of Vehicle</p>
            <p class="p">a) Charges for optional services, if any</p>
            <p class="p">
                b) Loss of, or damage or repair to the Vehicle, loss of use, diminution of the Vehicle's value caused by damage to it or repair to it, and costs to enforce such charges including administrative fees for processing the claim and legal expenses;{' '}
            </p>
            <p class="p">c) £20 extra charge per day for late return of the Vehicle.</p>
            <p class="p">d) Unless due to the fault of Owner, all fines, penalties, traffic and/or parking violations, court costs, towing charges and other expenses relating to the Vehicle assessed against Owner or the Vehicle during the rental Term;</p>
            <p class="p">e) all expenses Owner incurs due to Renter's failure to return the Vehicle including costs in locating and recovering the Vehicle; </p>
            <p class="p">f) all costs incurred to collect unpaid monies due; and</p>
            <p class="p">
                3. <b>Security Deposit.</b> In addition to the fees listed in Section 2, Renter shall pay a deposit of <b>£130.00 </b> at the time this Agreement is signed. Owner may use the deposit to cover any amounts due under this Agreement
            </p>
            <p class="p">
                4. <b>Authorized Drivers.</b> Only those who are a party to this Agreement, sign the Agreement and have a current valid driver's license to operate the Vehicle are permitted to drive the Vehicle. Any other drivers are prohibited from operating Vehicle
            </p>
            <p class="p">
                5. <b>Insurance.</b> Renter is responsible for all loss or damage Renter causes in Vehicle to third-parties. Renter must carry insurance satisfactory to Owner. If Owner does not possess such insurance or where law requires, Owner will arrange for automobile insurance to cover Vehicle and Renter. Owner will charge Renter for the insurance provided or It is renter's responsibility to arrange appropriate insurance, in the event of any accident damage or any other damage to the vehicle Renter is responsible to pay those damages either from his insurer or renter bound to pay. Renter is responsible to have a valid comprehensive insurance of the vehicle throughout the hire period.
            </p>
            <p class="p">
                6. <b>Restrictions on Use.</b> Renter shall not:
            </p>
            <ul>
                <li>a) Permit the Vehicle to be driven by any person who is not an Authorized Driver under this Agreement;</li>
                <li>b) Operate the Vehicle or permit it to be operated in violation of law, including but not limited to driving under the influence of alcohol or drugs, or in breach of rules and regulations of road traffic;</li>
                <li>c) Operate the Vehicle or permit it to be operated to commit a violation of law;</li>
                <li>d) Operate the Vehicle or permit it to be operated for any race, test, or contest;</li>
                <li>e) Operate the Vehicle or permit it to be operated for the transport of more passengers or goods than the maximum allowable for the Vehicle or to carry hazardous or explosive substances of any kind; </li>
                <li>f) Drive or permit the Vehicle to be driven by any person who does not hold a current valid driver's license to operate the Vehicle;</li>
                <li>g) Drive or permit the Vehicle to be driven or parked on roadways not regularly maintained, or on any roads, beach, driveway, or surface likely to cause damage to the Vehicle; </li>
                <li>h) Operate the Vehicle or allow it to be operated to push or tow any other vehicle;</li>
                <li>i) allow any person to smoke in the Vehicle.</li>
            </ul>
            <p class="p">
                7.<b>Repair or Loss and Reporting to Police.</b> Vehicle shall not be serviced or repaired, and parts and accessories shall not be replaced without Owner's prior consent. Renter shall alert Owner to any damage to the Vehicle. Renter shall be responsible for any loss or damage to Vehicle and loss of use, diminution of the Vehicle's value caused by damage to it or repair to it and missing equipment. In the event Renter is in an accident, has an incident in Vehicle or if Vehicle is subject to theft or vandalism Renter shall report the accident or incident to Owner as soon as practicable.
            </p>
            <p class="p">
                8. <b>Condition of Vehicle.</b> The Condition of Vehicle Checklist ("Checklist") attached is hereby incorporated by reference. Renter acknowledges that Renter has examined the Vehicle and that it is in good condition except as otherwise specified in the Checklist. OWNER MAKES NO WARRANTY, EXPRESS OR IMPLIED, COURSE OF DEALING, COURSE OF PERFORMANCE AND EXPRESSLY EXCLUDES AND DISCLAIMS ALL WARRANTIES AND REPRESENTATIONS OF ANY KIND, INCLUDING ANY WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
            </p>
            <p class="p">
                9. <b>Return of Vehicle.</b> Renter shall return Vehicle on the date specified in Section 1 in the same condition as Renter received it, except for normal wear and tear. Renter shall return the Vehicle to the agreed return location. If Vehicle is not returned on said date, Owner reserves the right to take any action necessary to regain possession of the Vehicle. Renter is liable to bring the vehicle back to the agreed location on the demand of the owner
            </p>
            <p class="p">
                10. <b> Termination. </b> This Agreement shall terminate on the date specified in Section 1. Owner reserves the right to terminate this Agreement earlier upon notice to Renter
            </p>
            <p class="p">
                11. <b> Indemnification and Liability. </b> Renter shall indemnify, defend and hold harmless Owner from and against any claim, demand, cause of action, loss or liability (including attorney's fees and expenses of litigation) for any property damage or personal injury arising from Renter's use of Vehicle by any cause, except to the extent caused by Owner's gross negligence or willful misconduct.
                <b> In no event shall Owner be responsible for any indirect, special or consequential loss or damages arising from Renter's use of Vehicle, including but not limited to loss profits and loss revenue, even if informed of such damages. The provisions of this Article shall survive the termination of this Agreement with respect to any claims or liability accruing before such termination. IN NO EVENT SHALL OWNER BE LIABLE FOR ANY INDIRECT, SPECIAL OR CONSEQUENTIAL LOSS OR DAMAGES ARISING FROM RENTER'S USE OF VEHICLE, INCLUDING BUT NOT LIMITED TO LOSS PROFITS AND LOSS REVENUE, EVEN IF INFORMED OF THE POSSIBILITY OF SUCH DAMAGES</b>
            </p>
            <p class="p">
                <b>Renter is responsible for the following.</b>
            </p>
            <ul>
                <li>A- Renter is responsible to pay for any parking charges and any penalty charges on the vehicle during the hire duration.</li>
                <li>B- Renter is responsible to pay for any toll or congestion charges &amp; Ultra low Emission Zone charges.</li>
            </ul>
            <p class="p">
                12. <b>Ownership. </b> Owner shall at all times retain ownership and documents for the Vehicle. Renter shall immediately notify Owner in the event Vehicle is levied, has a lien attached or is threatened with seizure. Renter shall indemnify and hold Owner harmless against all loss and damages caused by such action.
            </p>
            <p class="p">
                13. <b>Severability.</b> In the event any provision of this Agreement is held by a court or other tribunal of competent jurisdiction to be unenforceable, that provision will be enforced to the maximum extent permissible under applicable law, and the other provisions of this Agreement will remain in full force and effect. The parties further agree that in the event such provision is an essential part of this Agreement, they will begin negotiations for a suitable replacement provision.
            </p>
            <p class="p">
                14.<b> Entire Agreement.</b> This Agreement represents the entire understanding relating to the subject matter hereof and prevails over any prior or contemporaneous, conflicting or additional communications. This Agreement can only be modified by a written amendment signed by the party against whom enforcement of such modification is sought.
            </p>
            <p class="p">
                15.<b> Assignment.</b> Renter may not, without the prior written consent of Owner, transfer or assign this Agreement or any part thereof. Any attempt to do so shall be a material default of this Agreement and shall be void.
            </p>
            <p class="p">Renter acknowledges receipt of a copy of this Agreement and acknowledges having read and understood the terms and conditions.</p>
    
    
                <div>
                    <div style="display: flex; flex-direction: row; justify-content: space-between; width: 50%;">
                        <div class="column">
                            <h5>
                                <b class='bold p' style="font-size: 16px;" >Owner (Vertex Cars)</b>
                            </h5>
                            <p class="p">Printed Name: <b>Administrator</b></p>
                            <p class="p">Date: ${new Date().toLocaleDateString()}</p>
                        </div>
                        <div class="column">
                            <h5>
                                <b class='bold p' style="font-size: 16px;">Renter</b>
                            </h5>
                            <p class="p">Printed Name: <b> ${data?.name}</b></p>
                            <p class="p">Date: ${new Date().toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: row; justify-content: space-between; width: 50%;">
                        <div class="column">
                            <h5>
                                <b class='bold p' style="font-size: 16px;">Owner (Vertex Cars)</b>
                            </h5>
                            <input disabled = {true} type="text" name="admin_signature" value="Administrator" class="adminSignature" />
                        </div>
                        <div>
                            <h5>
                                <b class='bold p' style="font-size: 16px;">${data?.name}</b>
                            </h5>
                            <div id="userSignature">
                                <input id="userSignatureInput" disabled = {true} type="text" name="" value="" class="adminSignature" />
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <br />
                
        </div>
    
    </div>`;
        let payLoad1 = {
          agreement: agreementHtml,
          booking_id: data._id,
          signature: picture,
        };

        const response1 = await signAgreementAPI(payLoad1);
        if (response1.status === "1") {
          toast.success(response1.message);
          navigate("/My-Cars");
        } else {
          toast.error(response1.error);
        }
      } else {
        toast.error(response.error);
      }
    } catch (error) {
      toast.error(error.msg || error.message || "Something went wrong");
    }
  };

  const cancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <iframe
        className="iframePdf"
        title="Embedded Content"
        src={VEH_AGREEMENT_URL + data.agreement_path + "#toolbar=0"}
        allowFullScreen
      ></iframe>
      {!data.agreement_signed_date && (
        <FloatButton
          description="Sign"
          shape="square"
          type="primary"
          style={{ right: 24 }}
          tooltip={<div>Sign Agreement</div>}
          onClick={signButtonClicked}
        ></FloatButton>
      )}
      <SignatureModal isModalOpen={isModalOpen} submit={submit} cancel={cancel} />
    </div>
  );
};

export default SignAgreement;
