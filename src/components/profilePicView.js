import React from 'react';

class ProfilePic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            username: "",
            profileHD: ""
        }

        // this.onSubmit = this.onSubmit.bind(this);
    }

    render() {

        const onSubmit = (e, props) => {

            e.preventDefault();
            const dlBtn = document.getElementById("dlBtn")

            if (this.state.username == "") {
                alert("Please enter a username");
            }
            else {

                fetch("https://www.instagram.com/" + this.state.username + "/?__a=1")
                    .then(res => res.json())
                    .then(res => {
                        this.setState({
                            name: res.graphql.user.full_name,
                            profileHD: res.graphql.user.profile_pic_url_hd
                        })
                        dlBtn.setAttribute("target", "_blank")
                        dlBtn.setAttribute("href", this.state.profileHD)
                        dlBtn.click()
                    })
            }
        }

        return (
            <div>
                <form onSubmit={onSubmit}>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={value => {
                            this.setState({
                                name: "",
                                profileHD: "",
                                username: value.target.value
                            })
                        }
                        } />
                    </div>
                    <a href="" id='dlBtn'><button type="submit" class="btn btn-primary">Download</button></a>
                </form>

            </div>

        )
    }
}

export default ProfilePic;