import React from 'react';
import '../style/AtAGlance.scss';
import { Dashboard } from 'powerbi-report-component';

const AtAGlance = props => {
    return (
        <div className="AtAGlance">
            <h1>At a Glance</h1>
            <hr/>
            <div className="dashboard">
                <iframe style={{border: "1px solid #222222"}} filterPaneEnabled="false" navContentPaneEnabled="false" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=0bfb8b88-85af-43bd-b814-175c6ce17ace&autoAuth=true&ctid=4046ceac-fdd3-46c9-ac80-b7c4a49bab70&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLW5vcnRoLWNlbnRyYWwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>
                 {/* <Dashboard
                tokenType={'Embed'}
                accessToken={"H4sIAAAAAAAEAB2WxQ7sihFE_-VuHclMkd7CHjMz7czMNHaUf8_cLFuqVVd31fnPHyt9hjkt_vz7j_sJlCJL_HfDznCWL-1lXKLxlKhxsTdUh9qSbB1OynSvTURqbgTwbGRZWX1cVaRPRvxNVT0c55v1epAz04bLWGNNMM5aNEW6MbUjoh0lbgwQfOHL8TbHAw751R0ohuP100kTr-wb2pxl_zE3RlEUVCj5niOTXkovhIpF2IoebLooDlRIE0xb37lRROyn_evQ0A6AezqGCTKIPCPoVHZxg-zbmPNdtQlEoWzwCj04O7fhp4oOLDg4rtQVLXxk17Szykwoawt0oR0U3YcQPd0oXieV2VcRAMXOclFomS_DrhEZy7M7wAp_0m4uBGtI8KJ8xmAcj3iYOXlJxRQ0wU0NG5YPUqPEBJ2PXpMUeoFT1_pLjOtAaMWrKYDn2x6SF4IKjt-CPaGapWrIVj3vth56B6WINC4QPWCo8Y5NbAfrGKKcniDqu_C9BZgSj2ZqIeDVs3QpCYOCZdAC396q7GRDJdZQPyj3Hn4_b9hhKnsmlrQerhh6-JVSzUvRrETotMV8Ysrhb-4r3x_vCM5sd9se7SprLfKG2hKRkZSHrY9Z4lno-ryjRMLkVofwViX6Vzmry0LgYYM6-SUmGj0yGglXRc1FLbHiE5UtcpQOb0UVpRAHg1wbKboUGpII5NTBWrF5ems3lkT8VJVXfNGGTQuTaf3wAdJzw_RZzd3LiO8nJ8cYEK_Ph3vRRKRerbBA49vvONdn2ctpXe_EsRbQO29DMEN2nTBrzIGl0TYGwSjFd20jyEZyx8ppwGNMZ6My9NbL_Yp_DoQxh9bvuGOA26UXQGEt6k0ouDe9XGoQfMfeKM-GFvdiMIr10fNM1avPqV7zRXq6pMHQJQAVpaitQvpmEqJWYiekhzTXb7s6uc5UijTIryZtS9p7CoQokgVwdYLJiiQh7kTetYWVu2DlQFiwpJdfldil-GU8lM8s680XueXWv67LNW0a60ucPl7gU9YAiCZ8EclV11D2tQWvE_TTxTsgKiNavJfIXciFvpc9dcqodADj61ziXEAlqY1QhuMwbd0wNNQVort2wioVb6Z0fd1a_ZLqxoBjW7YivcAgidbGTrAVttcrl4KeBpns6pjCtGCBAlr4vNAgYvHNl7g2MjfSMnBJww3SIwqHwpq8Pcac2E505wDtRWaCsmCGXoCdy8X7s8mpddU0gAn0VVQ1O5zUWvG0cdyxfJ_h-Jc38REBGGg9-8MMfnTXq6ejGQ0ECaW_k67j2_p9aS57L1VPlz7f2gynYdc7C4FOaL9NQAMIC1MewWtxbLoSYlcN5y21TQtzmqNsXpSGNdAMSI5yXW1HyaZ4YLvLeGonPbTD4i-Rz2qKCdpDemt3EvAyCRqc1Zm0n7cvcdPR0vfIM-Eq7D6xUKYlKicKOd3YYySTNfamc4jycASEYsHYuGr3sSlHjCJxWa-5mH0K4rs5JAs03jzMhPB5PpeRdhlaSck00kOLEPCyLnO6auyj5kkeP85KfmpPcYJzyEMO482duCFdz-cbYAT7mQldsLdYrfvPeF65M8LEHu1C842WCmgLs2bBIGWi2YAnOWm0krAJ1JykiSQi2y2NPMzx3CdaDEtvXfFtpOloDnZL_x6JKj1tiA_KNNa0-pi2vWAEAUxvIY-D_IsudfWkgKwlqgOcxKpoxdg9BH7vEc1TZ3McKphGgwxHeh1zQwgniuieNU6-IVQ7-MzCvt2eKL18uleRcIF_WjY11I9R3gVADColWG7OnNy-lmmGX0pKxEfceiaWwD0uUBjIo4tfxY70RgGz-cRGHs218Q1yJCs0UiA5gBrTTaVJvSYwmdabsRSHj2YrXZN8W4V7mbYqHrlPT1NpzaZoaWrcmeeL095qh_zZTGM8V_Gt7e_blI_AqhB1H_jqGW4Crg5l2fyqrkEEXrqslVmy1m-UmoAwPSivaWmpe0UwsHzgI4-jaOhIZPm8iBbysI9EZSmvYeVcpE35weYZLeoC4U32xQ_NvoXnWFadz5rz5txkHbPqC5ygYcHq-MlWoUXYyyx9Em6TcXO6ZV_1r73Gig2Lavs3oMqH5aAO0pSrzGxIlxi2WVB1k7YE5dSKxI0Jeb7bg22UcY6IxB0R5k1C7EDX9kyVEnZnw7WzZd_Bw0OOwTFhaNmg4VuoSZsAQ-L-MDxDnR-PB1xF4Ek8Yby4otDa6X8GIChp3pwE3e0br0Z7VHFtyYPQcesU0TxLyckQSGmjubyDRhLa36nucx_get_4M7JSJVcZpyfOHwfyRACoLwlVRHZPjaruDlcZqqWCXPlR5hDuPvCvi10NbGwJYsksCRMb39vs8ccB1SZOGAA92KO4PorVwuqTT2u1M4t7toqPI2zcuPTQWyMHxVTAV9dBB8-ZzJ9UafClag0XTI-67O5H0BWN8s-__ny2ZzlmtXx-OGXvFev61EtgcuEbjIhuflatPFiL_PK2XNC3eHYcCyQnXehsnWnOi4sLTMYCah3GOtYHUZrqFxuls4LHFu5XnodHVjSkwgE9APSDDh-Oyqn31K9FTvLimKOfHUKrcM0dg5x0w2N33syjkTzvANXRn9fxAyCoB6OtS15Np88eDahUcKKO7UPcI8_JTrAJimmfP8gDoLPD1mnq4FbEjdAf37ENwRn14lLgQhpA0tI9cYFO7Ui5zEJhCqxlSf_oaCr67qm-BT2HQ3qt-VQqoe579xYlE1TRtHgSvOH9LDgCRTp8V0y-6Lhkk1SWB495Ji_X7u6HfCzgv5Luhx3qs9xAO1MV63_--bvmZ2nKTQ5-WxYbszUdpaLXhDlns4NgtDTu_6vctp7S49zKn0wC0XuqDXB47U9m7WKHS8yomn4WnZRYf-OEbSu1NLWom6p81n6YySHznNurnfJrY8n8QU-4D9gHuwxSZgdgxjNuPR_9LYfk6vb6VcFAKoGW4DYzuI5JqlgjVeCOQwsDlqAXJ4gjFGp6LvQSnwwnuSmZzupINKtJjBfwBaHGNo7RElPtwxRlLiz1KZdi-ACBDYaQFRr2Xn6C79D28ZqkEPgezIdrnrLFf43VRn0ohvwPZbLZdG1YsMsIgcKCobH5bn-_vGOM4LVBimdVmarC9YvnSLJnU4G9NvU9PUbXCgHp8mkooVGGXrsaptHLT2YvhMYFMPqb9S4jUQBtIm04Xyv6_jXjv_8DvhyucUIMAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19"}
                embedUrl={"https://app.powerbi.com/dashboardEmbed?dashboardId=b5f50796-6e97-4dc5-a755-00cf4405e029&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19"}
                embedId={"b5f50796-6e97-4dc5-a755-00cf4405e029"}
                style={{height: "70vh"}}
                pageView={'actualSize'} // 'fitToWidth' (default) , 'oneColumn', 'actualSize'
                onLoad={(dashboard) => {
                    console.log('Dashboard Loaded,', dashboard);
                }}
                onTileClicked={(data) => {
                    console.log('Data from tile', data);
                }}
                /> */}
            </div>
        </div>
    )
}

export default AtAGlance;