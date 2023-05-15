export const renderStatus = (status) => {
	if (status === "completed") {
		return (
			<svg
				width="91"
				height="34"
				viewBox="0 0 91 34"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="1.1001"
					y="1"
					width="89"
					height="32"
					rx="12.5"
					fill="#E8F8EE"
				/>
				<path
					d="M21.9858 15.7173H20.392C20.3465 15.456 20.2627 15.2244 20.1406 15.0227C20.0184 14.8182 19.8664 14.6449 19.6846 14.5028C19.5028 14.3608 19.2954 14.2543 19.0625 14.1832C18.8323 14.1094 18.5838 14.0724 18.3167 14.0724C17.8423 14.0724 17.4218 14.1918 17.0554 14.4304C16.6889 14.6662 16.4019 15.0128 16.1946 15.4702C15.9872 15.9247 15.8835 16.4801 15.8835 17.1364C15.8835 17.804 15.9872 18.3665 16.1946 18.8239C16.4048 19.2784 16.6917 19.6222 17.0554 19.8551C17.4218 20.0852 17.8409 20.2003 18.3125 20.2003C18.5738 20.2003 18.8181 20.1662 19.0454 20.098C19.2755 20.027 19.4815 19.9233 19.6633 19.7869C19.848 19.6506 20.0028 19.483 20.1278 19.2841C20.2556 19.0852 20.3437 18.858 20.392 18.6023L21.9858 18.6108C21.9261 19.0256 21.7968 19.4148 21.598 19.7784C21.4019 20.142 21.1448 20.4631 20.8267 20.7415C20.5085 21.017 20.1363 21.233 19.7102 21.3892C19.284 21.5426 18.811 21.6193 18.2911 21.6193C17.5241 21.6193 16.8394 21.4418 16.2372 21.0866C15.6349 20.7315 15.1605 20.2188 14.8139 19.5483C14.4673 18.8778 14.294 18.0739 14.294 17.1364C14.294 16.196 14.4687 15.392 14.8181 14.7244C15.1676 14.054 15.6434 13.5412 16.2457 13.1861C16.848 12.831 17.5298 12.6534 18.2911 12.6534C18.7769 12.6534 19.2286 12.7216 19.6463 12.858C20.0639 12.9943 20.436 13.1946 20.7627 13.4588C21.0894 13.7202 21.3579 14.0412 21.5681 14.4219C21.7812 14.7997 21.9204 15.2315 21.9858 15.7173ZM26.2205 21.6278C25.5813 21.6278 25.0273 21.4872 24.5585 21.206C24.0898 20.9247 23.7262 20.5312 23.4676 20.0256C23.212 19.5199 23.0841 18.929 23.0841 18.2528C23.0841 17.5767 23.212 16.9844 23.4676 16.4759C23.7262 15.9673 24.0898 15.5724 24.5585 15.2912C25.0273 15.0099 25.5813 14.8693 26.2205 14.8693C26.8597 14.8693 27.4137 15.0099 27.8824 15.2912C28.3512 15.5724 28.7134 15.9673 28.9691 16.4759C29.2276 16.9844 29.3568 17.5767 29.3568 18.2528C29.3568 18.929 29.2276 19.5199 28.9691 20.0256C28.7134 20.5312 28.3512 20.9247 27.8824 21.206C27.4137 21.4872 26.8597 21.6278 26.2205 21.6278ZM26.229 20.392C26.5756 20.392 26.8654 20.2969 27.0983 20.1065C27.3313 19.9134 27.5046 19.6548 27.6182 19.331C27.7347 19.0071 27.7929 18.6463 27.7929 18.2486C27.7929 17.848 27.7347 17.4858 27.6182 17.1619C27.5046 16.8352 27.3313 16.5753 27.0983 16.3821C26.8654 16.1889 26.5756 16.0923 26.229 16.0923C25.8739 16.0923 25.5784 16.1889 25.3426 16.3821C25.1097 16.5753 24.935 16.8352 24.8185 17.1619C24.7049 17.4858 24.648 17.848 24.648 18.2486C24.648 18.6463 24.7049 19.0071 24.8185 19.331C24.935 19.6548 25.1097 19.9134 25.3426 20.1065C25.5784 20.2969 25.8739 20.392 26.229 20.392ZM30.6661 21.5V14.9545H32.1406V16.0668H32.2173C32.3536 15.6918 32.5795 15.3991 32.8948 15.1889C33.2102 14.9759 33.5866 14.8693 34.0241 14.8693C34.4673 14.8693 34.8409 14.9773 35.1448 15.1932C35.4517 15.4062 35.6676 15.6974 35.7926 16.0668H35.8608C36.0056 15.7031 36.25 15.4134 36.5937 15.1974C36.9403 14.9787 37.3508 14.8693 37.8252 14.8693C38.4275 14.8693 38.919 15.0597 39.2997 15.4403C39.6804 15.821 39.8707 16.3764 39.8707 17.1065V21.5H38.3238V17.3452C38.3238 16.9389 38.2159 16.642 38 16.4545C37.784 16.2642 37.5198 16.169 37.2073 16.169C36.8352 16.169 36.544 16.2855 36.3338 16.5185C36.1264 16.7486 36.0227 17.0483 36.0227 17.4176V21.5H34.5099V17.2812C34.5099 16.9432 34.4076 16.6733 34.2031 16.4716C34.0014 16.2699 33.7372 16.169 33.4105 16.169C33.1889 16.169 32.9872 16.2259 32.8054 16.3395C32.6235 16.4503 32.4786 16.608 32.3707 16.8125C32.2627 17.0142 32.2088 17.25 32.2088 17.5199V21.5H30.6661ZM41.4357 23.9545V14.9545H42.9527V16.0369H43.0422C43.1218 15.8778 43.234 15.7088 43.3789 15.5298C43.5237 15.348 43.7198 15.1932 43.9669 15.0653C44.2141 14.9347 44.5294 14.8693 44.913 14.8693C45.4186 14.8693 45.8746 14.9986 46.2809 15.2571C46.6899 15.5128 47.0138 15.892 47.2524 16.3949C47.4939 16.8949 47.6147 17.5085 47.6147 18.2358C47.6147 18.9545 47.4968 19.5653 47.261 20.0682C47.0252 20.571 46.7041 20.9545 46.2979 21.2188C45.8916 21.483 45.4314 21.6151 44.9172 21.6151C44.5422 21.6151 44.2311 21.5526 43.984 21.4276C43.7368 21.3026 43.538 21.152 43.3874 20.9759C43.2397 20.7969 43.1246 20.6278 43.0422 20.4688H42.9783V23.9545H41.4357ZM42.9485 18.2273C42.9485 18.6506 43.0081 19.0213 43.1274 19.3395C43.2496 19.6577 43.4243 19.9062 43.6516 20.0852C43.8817 20.2614 44.1601 20.3494 44.4868 20.3494C44.8277 20.3494 45.1132 20.2585 45.3434 20.0767C45.5735 19.892 45.7468 19.6406 45.8632 19.3224C45.9826 19.0014 46.0422 18.6364 46.0422 18.2273C46.0422 17.821 45.984 17.4602 45.8675 17.1449C45.751 16.8295 45.5777 16.5824 45.3476 16.4034C45.1175 16.2244 44.8306 16.1349 44.4868 16.1349C44.1573 16.1349 43.8774 16.2216 43.6473 16.3949C43.4172 16.5682 43.2425 16.8111 43.1232 17.1236C43.0067 17.4361 42.9485 17.804 42.9485 18.2273ZM50.4783 12.7727V21.5H48.9357V12.7727H50.4783ZM54.9623 21.6278C54.3061 21.6278 53.7393 21.4915 53.262 21.2188C52.7876 20.9432 52.4225 20.554 52.1669 20.0511C51.9112 19.5455 51.7833 18.9503 51.7833 18.2656C51.7833 17.5923 51.9112 17.0014 52.1669 16.4929C52.4254 15.9815 52.7862 15.5838 53.2492 15.2997C53.7123 15.0128 54.2563 14.8693 54.8813 14.8693C55.2848 14.8693 55.6654 14.9347 56.0234 15.0653C56.3842 15.1932 56.7024 15.392 56.9779 15.6619C57.2563 15.9318 57.4751 16.2756 57.6342 16.6932C57.7933 17.108 57.8728 17.6023 57.8728 18.1761V18.6491H52.5078V17.6094H56.3941C56.3913 17.3139 56.3274 17.0511 56.2024 16.821C56.0774 16.5881 55.9027 16.4048 55.6782 16.2713C55.4566 16.1378 55.1981 16.071 54.9027 16.071C54.5873 16.071 54.3103 16.1477 54.0717 16.3011C53.8331 16.4517 53.647 16.6506 53.5135 16.8977C53.3828 17.142 53.316 17.4105 53.3132 17.7031V18.6108C53.3132 18.9915 53.3828 19.3182 53.522 19.5909C53.6612 19.8608 53.8558 20.0682 54.1058 20.2131C54.3558 20.3551 54.6484 20.4261 54.9836 20.4261C55.2081 20.4261 55.4112 20.3949 55.593 20.3324C55.7748 20.267 55.9325 20.1719 56.066 20.0469C56.1995 19.9219 56.3004 19.767 56.3686 19.5824L57.8089 19.7443C57.718 20.125 57.5447 20.4574 57.289 20.7415C57.0362 21.0227 56.7123 21.2415 56.3174 21.3977C55.9225 21.5511 55.4708 21.6278 54.9623 21.6278ZM62.4463 14.9545V16.1477H58.6835V14.9545H62.4463ZM59.6125 13.3864H61.1551V19.5312C61.1551 19.7386 61.1864 19.8977 61.2489 20.0085C61.3142 20.1165 61.3995 20.1903 61.5046 20.2301C61.6097 20.2699 61.7262 20.2898 61.854 20.2898C61.9506 20.2898 62.0387 20.2827 62.1182 20.2685C62.2006 20.2543 62.2631 20.2415 62.3057 20.2301L62.5657 21.4361C62.4833 21.4645 62.3654 21.4957 62.212 21.5298C62.0614 21.5639 61.8767 21.5838 61.658 21.5895C61.2716 21.6009 60.9236 21.5426 60.6139 21.4148C60.3043 21.2841 60.0585 21.0824 59.8767 20.8097C59.6978 20.5369 59.6097 20.196 59.6125 19.7869V13.3864ZM66.5639 21.6278C65.9076 21.6278 65.3409 21.4915 64.8636 21.2188C64.3892 20.9432 64.0241 20.554 63.7684 20.0511C63.5127 19.5455 63.3849 18.9503 63.3849 18.2656C63.3849 17.5923 63.5127 17.0014 63.7684 16.4929C64.0269 15.9815 64.3877 15.5838 64.8508 15.2997C65.3139 15.0128 65.8579 14.8693 66.4829 14.8693C66.8863 14.8693 67.267 14.9347 67.625 15.0653C67.9858 15.1932 68.3039 15.392 68.5795 15.6619C68.8579 15.9318 69.0767 16.2756 69.2358 16.6932C69.3948 17.108 69.4744 17.6023 69.4744 18.1761V18.6491H64.1093V17.6094H67.9957C67.9929 17.3139 67.9289 17.0511 67.8039 16.821C67.6789 16.5881 67.5042 16.4048 67.2798 16.2713C67.0582 16.1378 66.7997 16.071 66.5042 16.071C66.1889 16.071 65.9119 16.1477 65.6733 16.3011C65.4346 16.4517 65.2485 16.6506 65.115 16.8977C64.9843 17.142 64.9176 17.4105 64.9147 17.7031V18.6108C64.9147 18.9915 64.9843 19.3182 65.1235 19.5909C65.2627 19.8608 65.4573 20.0682 65.7073 20.2131C65.9573 20.3551 66.25 20.4261 66.5852 20.4261C66.8096 20.4261 67.0127 20.3949 67.1946 20.3324C67.3764 20.267 67.534 20.1719 67.6676 20.0469C67.8011 19.9219 67.9019 19.767 67.9701 19.5824L69.4105 19.7443C69.3196 20.125 69.1463 20.4574 68.8906 20.7415C68.6377 21.0227 68.3139 21.2415 67.919 21.3977C67.5241 21.5511 67.0724 21.6278 66.5639 21.6278ZM73.2084 21.6151C72.6942 21.6151 72.234 21.483 71.8277 21.2188C71.4215 20.9545 71.1005 20.571 70.8647 20.0682C70.6289 19.5653 70.511 18.9545 70.511 18.2358C70.511 17.5085 70.6303 16.8949 70.8689 16.3949C71.1104 15.892 71.4357 15.5128 71.8448 15.2571C72.2539 14.9986 72.7098 14.8693 73.2127 14.8693C73.5962 14.8693 73.9115 14.9347 74.1587 15.0653C74.4059 15.1932 74.6019 15.348 74.7468 15.5298C74.8916 15.7088 75.0039 15.8778 75.0834 16.0369H75.1473V12.7727H76.6942V21.5H75.1772V20.4688H75.0834C75.0039 20.6278 74.8888 20.7969 74.7382 20.9759C74.5877 21.152 74.3888 21.3026 74.1416 21.4276C73.8945 21.5526 73.5834 21.6151 73.2084 21.6151ZM73.6388 20.3494C73.9655 20.3494 74.2439 20.2614 74.474 20.0852C74.7041 19.9062 74.8789 19.6577 74.9982 19.3395C75.1175 19.0213 75.1772 18.6506 75.1772 18.2273C75.1772 17.804 75.1175 17.4361 74.9982 17.1236C74.8817 16.8111 74.7084 16.5682 74.4783 16.3949C74.251 16.2216 73.9712 16.1349 73.6388 16.1349C73.2951 16.1349 73.0081 16.2244 72.778 16.4034C72.5479 16.5824 72.3746 16.8295 72.2581 17.1449C72.1416 17.4602 72.0834 17.821 72.0834 18.2273C72.0834 18.6364 72.1416 19.0014 72.2581 19.3224C72.3774 19.6406 72.5522 19.892 72.7823 20.0767C73.0152 20.2585 73.3007 20.3494 73.6388 20.3494Z"
					fill="#15833C"
				/>
				<rect
					x="1.1001"
					y="1"
					width="89"
					height="32"
					rx="12.5"
					stroke="#68D08C"
				/>
			</svg>
		);
	}

	if ( status ==="not-completed") {
		return (
			<svg
				width="139"
				height="28"
				viewBox="0 0 139 28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect width="139" height="28" rx="8" fill="#FFF6E6" />
				<path
					d="M16.928 9.76C18.916 9.76 20.176 10.838 20.176 12.644C20.176 14.436 18.916 15.514 16.928 15.514H14.87V19H13.372V9.76H16.928ZM16.69 14.24C18.02 14.24 18.622 13.694 18.622 12.644C18.622 11.594 18.02 11.034 16.69 11.034H14.87V14.24H16.69ZM27.9873 18.02C28.1693 18.02 28.3513 18.006 28.5053 17.964L28.4073 18.972C28.1833 19.07 27.8893 19.14 27.5393 19.14C26.7833 19.14 26.2653 18.86 26.1113 18.09C25.6773 18.762 24.7813 19.14 23.7453 19.14C22.4293 19.14 21.4633 18.524 21.4633 17.306C21.4633 16.228 22.3593 15.43 24.1933 15.108L25.9713 14.786V14.422C25.9713 13.582 25.4533 13.036 24.5433 13.036C23.6753 13.036 23.0313 13.414 22.7373 14.296L21.5753 13.68C21.9113 12.574 22.9893 11.86 24.5153 11.86C26.2653 11.86 27.4693 12.658 27.4693 14.338V17.502C27.4693 17.852 27.6093 18.02 27.9873 18.02ZM24.0673 18.006C25.0053 18.006 25.9713 17.516 25.9713 16.676V15.836L24.4453 16.144C23.4933 16.326 23.0173 16.648 23.0173 17.208C23.0173 17.726 23.4093 18.006 24.0673 18.006ZM33.5357 11.86C33.8157 11.86 34.1097 11.902 34.3057 12L34.0677 13.372C33.8717 13.26 33.5637 13.19 33.1857 13.19C32.3457 13.19 31.4217 13.862 31.4217 15.29V19H29.9237V12H31.1977L31.3377 13.246C31.7157 12.336 32.4577 11.86 33.5357 11.86ZM39.5511 17.446L39.9011 18.538C39.4531 18.916 38.7951 19.14 38.0391 19.14C36.8351 19.14 35.9111 18.594 35.8971 17.152V13.176H34.5671V12H35.8971V10.362L37.3951 9.942V12H39.8451V13.176H37.3951V16.9C37.3951 17.586 37.8011 17.894 38.4171 17.894C38.8931 17.894 39.2431 17.726 39.5511 17.446ZM42.0547 10.824C41.4107 10.824 41.0467 10.474 41.0467 9.886C41.0467 9.298 41.4107 8.962 42.0547 8.962C42.6987 8.962 43.0487 9.298 43.0487 9.886C43.0487 10.474 42.6987 10.824 42.0547 10.824ZM42.7967 12V19H41.2987V12H42.7967ZM51.1885 18.02C51.3705 18.02 51.5525 18.006 51.7065 17.964L51.6085 18.972C51.3845 19.07 51.0905 19.14 50.7405 19.14C49.9845 19.14 49.4665 18.86 49.3125 18.09C48.8785 18.762 47.9825 19.14 46.9465 19.14C45.6305 19.14 44.6645 18.524 44.6645 17.306C44.6645 16.228 45.5605 15.43 47.3945 15.108L49.1725 14.786V14.422C49.1725 13.582 48.6545 13.036 47.7445 13.036C46.8765 13.036 46.2325 13.414 45.9385 14.296L44.7765 13.68C45.1125 12.574 46.1905 11.86 47.7165 11.86C49.4665 11.86 50.6705 12.658 50.6705 14.338V17.502C50.6705 17.852 50.8105 18.02 51.1885 18.02ZM47.2685 18.006C48.2065 18.006 49.1725 17.516 49.1725 16.676V15.836L47.6465 16.144C46.6945 16.326 46.2185 16.648 46.2185 17.208C46.2185 17.726 46.6105 18.006 47.2685 18.006ZM54.5809 8.85V16.956C54.5809 17.642 54.7489 17.88 55.3089 17.88C55.6589 17.88 55.8689 17.838 56.2329 17.698L56.0649 18.902C55.7569 19.056 55.3089 19.14 54.9029 19.14C53.6569 19.14 53.0829 18.524 53.0829 17.166V8.85H54.5809ZM58.9422 8.85V16.956C58.9422 17.642 59.1102 17.88 59.6702 17.88C60.0202 17.88 60.2302 17.838 60.5942 17.698L60.4262 18.902C60.1182 19.056 59.6702 19.14 59.2642 19.14C58.0182 19.14 57.4442 18.524 57.4442 17.166V8.85H58.9422ZM67.8331 12L64.7671 19.826C64.1511 21.45 63.4371 22.01 62.1771 22.01C61.4491 22.01 60.9451 21.842 60.5251 21.45L60.9591 20.302C61.2811 20.694 61.6731 20.806 62.1071 20.806C62.6251 20.806 63.0171 20.61 63.3251 19.798L63.6331 19.042L62.9051 17.306L60.7211 12H62.4011L63.9411 16.396L64.3471 17.712L64.8231 16.27L66.2791 12H67.8331ZM76.4666 11.86C78.1606 11.86 79.0706 12.672 79.5046 13.82L78.1046 14.38C77.8666 13.512 77.3346 13.05 76.4666 13.05C75.2206 13.05 74.4926 13.932 74.4926 15.514C74.4926 17.096 75.2346 17.95 76.4666 17.95C77.4326 17.95 78.0066 17.46 78.1886 16.592L79.5606 17.054C79.1686 18.328 78.1186 19.14 76.4946 19.14C74.2826 19.14 72.9806 17.782 72.9806 15.5C72.9806 13.218 74.2826 11.86 76.4666 11.86ZM85.0823 11.86C86.5663 11.86 87.7143 12.714 87.7143 14.464V19H86.2163V14.94C86.2163 13.554 85.5723 13.092 84.7183 13.092C83.7943 13.092 82.8143 13.694 82.8143 15.304V19H81.3163V8.85H82.8143V13.12C83.2763 12.252 84.1023 11.86 85.0823 11.86ZM96.0323 18.02C96.2143 18.02 96.3963 18.006 96.5503 17.964L96.4523 18.972C96.2283 19.07 95.9343 19.14 95.5843 19.14C94.8283 19.14 94.3103 18.86 94.1563 18.09C93.7223 18.762 92.8263 19.14 91.7903 19.14C90.4743 19.14 89.5083 18.524 89.5083 17.306C89.5083 16.228 90.4043 15.43 92.2383 15.108L94.0163 14.786V14.422C94.0163 13.582 93.4983 13.036 92.5883 13.036C91.7203 13.036 91.0763 13.414 90.7823 14.296L89.6203 13.68C89.9563 12.574 91.0343 11.86 92.5603 11.86C94.3103 11.86 95.5143 12.658 95.5143 14.338V17.502C95.5143 17.852 95.6543 18.02 96.0323 18.02ZM92.1123 18.006C93.0503 18.006 94.0163 17.516 94.0163 16.676V15.836L92.4903 16.144C91.5383 16.326 91.0623 16.648 91.0623 17.208C91.0623 17.726 91.4543 18.006 92.1123 18.006ZM101.581 11.86C101.861 11.86 102.155 11.902 102.351 12L102.113 13.372C101.917 13.26 101.609 13.19 101.231 13.19C100.391 13.19 99.4666 13.862 99.4666 15.29V19H97.9686V12H99.2426L99.3826 13.246C99.7606 12.336 100.503 11.86 101.581 11.86ZM107.539 17.908C108.953 17.908 109.779 18.58 109.779 19.7C109.779 21.156 108.211 22.01 106.181 22.01C103.871 22.01 102.849 21.254 102.849 20.218C102.849 19.588 103.297 19.084 104.095 18.874C103.549 18.622 103.115 18.188 103.115 17.544C103.115 16.816 103.549 16.368 104.207 16.144C103.507 15.738 103.129 15.066 103.129 14.226C103.129 12.798 104.347 11.86 106.167 11.86C106.699 11.86 107.175 11.944 107.581 12.084C107.833 11.09 108.491 10.502 109.639 10.53L109.891 11.692C108.981 11.664 108.449 11.93 108.239 12.406C108.855 12.826 109.205 13.456 109.205 14.226C109.205 15.654 108.001 16.592 106.167 16.592C105.733 16.592 105.355 16.55 105.005 16.466C104.529 16.578 104.333 16.83 104.333 17.236C104.333 17.67 104.669 17.908 105.201 17.908H107.539ZM106.167 12.91C105.313 12.91 104.669 13.442 104.669 14.226C104.669 15.024 105.313 15.556 106.167 15.556C107.035 15.556 107.679 15.024 107.679 14.226C107.679 13.442 107.035 12.91 106.167 12.91ZM106.321 20.89C107.749 20.89 108.491 20.414 108.491 19.868C108.491 19.42 108.197 19.154 107.273 19.154H105.383C104.529 19.154 104.123 19.434 104.123 19.896C104.123 20.512 104.837 20.89 106.321 20.89ZM117.475 15.29C117.475 15.556 117.447 15.878 117.419 16.06H112.295C112.463 17.292 113.191 17.95 114.325 17.95C115.249 17.95 115.865 17.614 116.089 16.998L117.335 17.516C116.831 18.552 115.865 19.14 114.325 19.14C112.113 19.14 110.811 17.782 110.811 15.5C110.811 13.218 112.043 11.86 114.227 11.86C116.327 11.86 117.475 13.26 117.475 15.29ZM114.227 13.05C113.121 13.05 112.463 13.708 112.309 14.912H116.075C115.935 13.736 115.277 13.05 114.227 13.05ZM124.335 8.85H125.833V19H124.517L124.433 17.74C124.027 18.566 123.173 19.14 122.067 19.14C120.163 19.14 118.973 17.796 118.973 15.514C118.973 13.218 120.177 11.86 122.081 11.86C123.117 11.86 123.915 12.364 124.335 13.134V8.85ZM122.403 17.936C123.579 17.936 124.335 17.054 124.335 15.584V15.416C124.335 13.96 123.579 13.078 122.403 13.078C121.199 13.078 120.471 13.974 120.471 15.5C120.471 17.026 121.199 17.936 122.403 17.936Z"
					fill="#FAA004"
				/>
			</svg>

			// <h3
			// 	className={`text-[1rem] font-semibold text-[#FAA004] bg-[#FFF6E6] px-[12px] py-[4px] rounded-lg `}
			// >
			// 	partially charged
			// </h3>
		);
	}
};