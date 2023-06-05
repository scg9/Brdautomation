const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');

const app=express();

const port=3001;

app.use(cors())
app.use(bodyParser.json())

app.post("/brd",(req,res)=>{
    const inputValue = req.body.value;

    // Process the input value and generate different data based on your requirements
    let responseData;
    if (inputValue === "value1") {
        responseData = { message: "In project management, an executive summary is a way to bring clarity to cross-functional collaborators, team leadership, and project stakeholders. Think of it like a project’s elevator pitch” for team members who don’t have the time or the need to dive into all of the project’s details.The main difference between an executive summary in project management and a more traditional executive summary in a business plan is that the former should be created at the beginning of your project—whereas the latter should be created after you’ve written your business plan. For example, to write an executive summary of an environmental study, you would compile a report on the results and findings once your study was over. But for an executive summary in project management, you want to cover what the project is aiming to achieve and why those goals matter.The same four parts apply to an executive summary in project management:Start with the problem or need the project is solving. Why is this project happening? What insight, customer feedback, product plan, or other need caused it to come to life?Outline the recommended solution, or the project’s objectives. How is the project going to solve the problem you established in the first part? What are the project goals and objectives?Explain the solution’s value. Once you’ve finished your project, what will happen? How will this improve and solve the problem you established in the first part?Wrap up with a conclusion about the importance of the work. This is another opportunity to reiterate why the problem is important, and why the project matters. It can also be helpful to reference your audience and how your solution will solve their problem. Finally, include any relevant next steps.If you’ve never written an executive summary before, you might be curious about where it fits into other project management elements. Here’s how executive summaries stack up:Executive summary vs. project planA project plan is a blueprint of the key elements your project will accomplish in order to hit your project goals and objectives. Project plans will include your goals, success metrics, stakeholders and roles, budget, milestones and deliverables, timeline and schedule, and communication plan.An executive summary is a summary of the most important information in your project plan. Think of the absolutely crucial things your management team needs to know when they land in your project, before they even have a chance to look at the project your executive summaryRead: Proof of concept (POC): How to demonstrate feasibility" };
    } else if (inputValue === "value2") {
        responseData = { message: "Yes, life insurance is a worthy purchase. Anybody with financial dependents will find the benefits of buying life insurance attractive. In case of the demise of the only income earner, a life insurance policy becomes a financial safety net that helps your loved ones pay for expenses such as a loan, childcare, education, health, and many other everyday bills. Life insurance is an affordable way to financially protect the people you love most." };
    } else {
        responseData = { message: "Under the waterfall solution development life cycle (SDLC), the project sponsor signs-off on the business requirements document (BRD); the BRD being the synthesis of the requirements elicited during the analysis phase. What does sponsor sign-off mean? It means that the sponsor assumes the accountability (business responsibility) that the BRD reflects the business need. What motivates the sponsor to sign-off? It is when the BRD matches or surpasses the sponsor’s risk tolerance." };
    }
    console.log(responseData,"resdata")
    res.send(responseData);
 

    // const text="hgjhasgjhs hjdasgagh";
    // res.send(text)
})

app.listen(port,()=>{
    console.log(`listining on ${port}`)
})