import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectLink }) => {
    // console.log(projectLink)
    // console.log(description)
    const handleProjectCardClick = (projectLink) => {
        console.log(projectLink)
        window.open(projectLink, '_blank');
    };
    return (
        <Col size={12} sm={6} md={4}>

            <div className="proj-imgbx" onClick={() => { handleProjectCardClick(projectLink) }}>
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}