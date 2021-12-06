import React, { PureComponent } from 'react';
import ContentSection from './ContentSection';
import sectionsData from '../data/sectionsData.json';
import '../styles/ContentList.scss';
class ContentList extends PureComponent {
    state = {
        sectionsData: []
    }
    componentDidMount() {
        const copyData = [...sectionsData].map(item => {
            item.active = false;
            return item
        })
        this.setState({
            sectionsData: copyData
        })
    }
    handleSectionClick = (id) => {
        const sectionsData = this.state.sectionsData.map(item => {
            if (item.id === id) item.active = !item.active
            else item.active = false;
            return item
        })
        this.setState({
            sectionsData
        })

    }
    render() {
        const { sectionsData } = this.state;
        const sections = sectionsData.map((section, index) => <ContentSection key={section.id} content={section} index={index} click={this.handleSectionClick} />)
        return (
            <ul className="section-list">
                {sections}
            </ul>
        )
    }
}
export default ContentList;